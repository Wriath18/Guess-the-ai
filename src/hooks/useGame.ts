import { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { ALL_MODELS } from '../data/models.ts';
import { AIModel, AnswerRecord, GameStats } from '../types.ts';
import { secureShuffle } from '../utils/shuffle.ts';
import { sounds } from '../utils/sound.ts';

const BEST_STREAK_KEY = 'rf_ai_best_streak';
const AUTO_ADVANCE_KEY = 'rf_ai_auto_advance';

export function useGame() {
  // Deck queue
  const [deck, setDeck] = useState<AIModel[]>(() => secureShuffle(ALL_MODELS));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // Game metrics
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [brokenStreakWas, setBrokenStreakWas] = useState<number | null>(null);
  const [bestStreak, setBestStreak] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(BEST_STREAK_KEY);
      return saved ? parseInt(saved, 10) || 0 : 0;
    }
    return 0;
  });

  // State of current round
  const [revealed, setRevealed] = useState<boolean>(false);
  const [lastGuessWasCorrect, setLastGuessWasCorrect] = useState<boolean | null>(null);
  const [lastUserGuess, setLastUserGuess] = useState<boolean | null>(null);
  
  // History
  const [history, setHistory] = useState<AnswerRecord[]>([]);

  // Settings
  const [autoAdvance, setAutoAdvance] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTO_ADVANCE_KEY) === 'true';
    }
    return false;
  });

  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentModel = deck[currentIndex] || deck[0];
  const roundNumber = history.length + 1;

  // Fire celebratory confetti on milestone streaks
  const fireConfetti = useCallback(() => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#000000', '#22C55E', '#FFE600', '#FF5252', '#38BDF8'],
      });
    } catch {
      // ignore in test or non-browser environments
    }
  }, []);

  // Update best streak
  const updateBestStreak = useCallback((newStreak: number) => {
    setBestStreak((prev) => {
      if (newStreak > prev) {
        if (typeof window !== 'undefined') {
          localStorage.setItem(BEST_STREAK_KEY, newStreak.toString());
        }
        return newStreak;
      }
      return prev;
    });
  }, []);

  // Move to next model
  const nextModel = useCallback(() => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    setRevealed(false);
    setLastGuessWasCorrect(null);
    setLastUserGuess(null);
    setBrokenStreakWas(null);

    setCurrentIndex((prev) => {
      const nextIdx = prev + 1;
      if (nextIdx >= deck.length) {
        // Deck completed! Reshuffle completely for continuous endless play
        setDeck(secureShuffle(ALL_MODELS));
        return 0;
      }
      return nextIdx;
    });
  }, [deck.length]);

  // Handle user's guess: isReal = true or false
  const submitGuess = useCallback((guessIsReal: boolean) => {
    if (revealed || !currentModel) return;

    const isCorrect = guessIsReal === currentModel.isReal;
    setRevealed(true);
    setLastGuessWasCorrect(isCorrect);
    setLastUserGuess(guessIsReal);

    let nextStreak = streak;

    if (isCorrect) {
      // Clear point: +1 point
      setScore((s) => s + 1);
      nextStreak = streak + 1;
      setStreak(nextStreak);
      setBrokenStreakWas(null);
      updateBestStreak(nextStreak);

      sounds.playCorrect();

      // Milestone celebration at streaks of 5, 10, 15, 20, 25, 50, etc.
      if (nextStreak > 0 && nextStreak % 5 === 0) {
        sounds.playStreakMilestone();
        fireConfetti();
      }
    } else {
      // Non-clear: 0 points deducted, streak breaks
      if (streak > 0) {
        setBrokenStreakWas(streak);
      } else {
        setBrokenStreakWas(null);
      }
      setStreak(0);
      sounds.playIncorrect();
    }

    // Add to history
    const record: AnswerRecord = {
      id: `${currentModel.id}-${Date.now()}`,
      roundNumber,
      model: currentModel,
      userGuess: guessIsReal,
      isCorrect,
      streakAtTime: nextStreak,
      timestamp: Date.now(),
    };
    setHistory((prev) => [record, ...prev]);

    // Handle auto-advance if enabled
    if (autoAdvance) {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
      autoAdvanceTimerRef.current = setTimeout(() => {
        nextModel();
      }, 1600);
    }
  }, [revealed, currentModel, streak, updateBestStreak, fireConfetti, roundNumber, autoAdvance, nextModel]);

  // Toggle auto advance
  const toggleAutoAdvance = useCallback(() => {
    setAutoAdvance((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem(AUTO_ADVANCE_KEY, next ? 'true' : 'false');
      }
      return next;
    });
  }, []);

  // Reset entire game
  const resetGame = useCallback(() => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    setDeck(secureShuffle(ALL_MODELS));
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setBrokenStreakWas(null);
    setRevealed(false);
    setLastGuessWasCorrect(null);
    setLastUserGuess(null);
    setHistory([]);
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (!revealed) {
        if (e.key === 'r' || e.key === 'R' || e.key === 'ArrowLeft') {
          e.preventDefault();
          submitGuess(true); // REAL
        } else if (e.key === 'f' || e.key === 'F' || e.key === 'ArrowRight') {
          e.preventDefault();
          submitGuess(false); // FAKE
        }
      } else {
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          nextModel();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [revealed, submitGuess, nextModel]);

  const stats: GameStats = {
    score,
    streak,
    bestStreak,
    totalAnswered: history.length,
    correctCount: history.filter((h) => h.isCorrect).length,
    incorrectCount: history.filter((h) => !h.isCorrect).length,
  };

  return {
    currentModel,
    roundNumber,
    revealed,
    lastGuessWasCorrect,
    lastUserGuess,
    brokenStreakWas,
    stats,
    history,
    deckLength: deck.length,
    currentIndex,
    autoAdvance,
    toggleAutoAdvance,
    submitGuess,
    nextModel,
    resetGame,
  };
}
