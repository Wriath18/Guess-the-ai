import { useState } from 'react';
import { useGame } from './hooks/useGame.ts';
import { Header } from './components/Header.tsx';
import { ScoreBoard } from './components/ScoreBoard.tsx';
import { ModelCard } from './components/ModelCard.tsx';
import { HistoryModal } from './components/HistoryModal.tsx';
import { RulesModal } from './components/RulesModal.tsx';

export default function App() {
  const {
    currentModel,
    roundNumber,
    revealed,
    lastGuessWasCorrect,
    lastUserGuess,
    brokenStreakWas,
    stats,
    history,
    deckLength,
    autoAdvance,
    toggleAutoAdvance,
    submitGuess,
    nextModel,
    resetGame,
  } = useGame();

  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black bg-grid-pattern flex flex-col justify-between selection:bg-yellow-300 selection:text-black">
      {/* Top Header */}
      <Header
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenRules={() => setIsRulesOpen(true)}
        onResetGame={resetGame}
        historyCount={history.length}
      />

      {/* Main Game Stage */}
      <main className="flex-1 flex flex-col justify-center items-center py-6 px-3 sm:px-6 max-w-5xl mx-auto w-full">
        {/* HUD / Stats Board */}
        <ScoreBoard
          stats={stats}
          brokenStreakWas={brokenStreakWas}
          roundNumber={roundNumber}
        />

        {/* Central Model Guessing Card */}
        {currentModel && (
          <ModelCard
            model={currentModel}
            revealed={revealed}
            lastGuessWasCorrect={lastGuessWasCorrect}
            lastUserGuess={lastUserGuess}
            brokenStreakWas={brokenStreakWas}
            streak={stats.streak}
            autoAdvance={autoAdvance}
            onToggleAutoAdvance={toggleAutoAdvance}
            onGuess={submitGuess}
            onNext={nextModel}
          />
        )}
      </main>

      {/* Footer Info / Controls */}
      <footer className="w-full border-t-3 border-black bg-white/90 backdrop-blur-xs py-3 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-bold text-black/70">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-green-500 border border-black" />
            <span>{deckLength} models in randomized rotation</span>
          </div>

          <div className="hidden md:flex items-center gap-2 font-mono text-[11px]">
            <span className="bg-yellow-100 px-1.5 py-0.5 border border-black">[R] Real</span>
            <span className="bg-red-100 px-1.5 py-0.5 border border-black">[F] Fake</span>
            <span className="bg-slate-100 px-1.5 py-0.5 border border-black">[Space] Next</span>
          </div>

          <div>
            <span>Neo-Brutalist Edition</span>
            <span className="mx-1.5">·</span>
            <button
              onClick={() => setIsRulesOpen(true)}
              className="underline hover:text-black cursor-pointer font-extrabold"
            >
              How it works
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
      />

      <RulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />
    </div>
  );
}
