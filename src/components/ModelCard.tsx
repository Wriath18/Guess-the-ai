import React from 'react';
import { Check, X, ArrowRight, Sparkles, AlertTriangle, Zap } from 'lucide-react';
import { AIModel } from '../types.ts';

interface ModelCardProps {
  model: AIModel;
  revealed: boolean;
  lastGuessWasCorrect: boolean | null;
  lastUserGuess: boolean | null;
  brokenStreakWas: number | null;
  streak: number;
  autoAdvance: boolean;
  onToggleAutoAdvance: () => void;
  onGuess: (isReal: boolean) => void;
  onNext: () => void;
}

export const ModelCard: React.FC<ModelCardProps> = ({
  model,
  revealed,
  lastGuessWasCorrect,
  lastUserGuess,
  brokenStreakWas,
  streak,
  autoAdvance,
  onToggleAutoAdvance,
  onGuess,
  onNext,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-2">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6 sm:p-10 text-center relative transition-all">
        {/* Decorative corner tag */}
        <div className="absolute -top-3.5 left-6 bg-[#FFE600] text-black text-xs font-black uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] tracking-wider">
          AI MODEL QUESTION
        </div>

        {/* Subtitle prompt */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-black/60 mb-3 mt-1">
          Is this model authentic or fictional?
        </p>

        {/* The Model Name (Dominant visual anchor) */}
        <div className="min-h-[140px] sm:min-h-[160px] flex items-center justify-center py-4 px-2">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading text-black tracking-tight break-words leading-tight selection:bg-yellow-300">
            {model.name}
          </h2>
        </div>

        {/* Action Zone: If NOT revealed, show the TWO buttons */}
        {!revealed ? (
          <div className="mt-4 sm:mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              {/* REAL BUTTON */}
              <button
                onClick={() => onGuess(true)}
                className="group relative bg-[#4ADE80] hover:bg-[#22C55E] text-black border-4 border-black p-4 sm:p-5 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer flex flex-col items-center justify-center gap-1"
                aria-label="Guess that this model is REAL"
              >
                <div className="flex items-center gap-2">
                  <Check className="w-6 h-6 stroke-[3.5]" />
                  <span className="text-2xl sm:text-3xl font-black font-heading tracking-wider">
                    REAL
                  </span>
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider bg-black/10 px-2 py-0.5 border border-black/30">
                  Key: [ R ] or [ ← ]
                </span>
              </button>

              {/* FAKE BUTTON */}
              <button
                onClick={() => onGuess(false)}
                className="group relative bg-[#FF5252] hover:bg-[#EF4444] text-black border-4 border-black p-4 sm:p-5 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer flex flex-col items-center justify-center gap-1"
                aria-label="Guess that this model is FAKE"
              >
                <div className="flex items-center gap-2">
                  <X className="w-6 h-6 stroke-[3.5]" />
                  <span className="text-2xl sm:text-3xl font-black font-heading tracking-wider">
                    FAKE
                  </span>
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider bg-black/10 px-2 py-0.5 border border-black/30">
                  Key: [ F ] or [ → ]
                </span>
              </button>
            </div>

            <p className="text-xs font-bold text-black/50 mt-4">
              Tip: Press <kbd className="px-1.5 py-0.5 bg-yellow-100 border border-black font-mono text-[10px]">R</kbd> for Real, or <kbd className="px-1.5 py-0.5 bg-red-100 border border-black font-mono text-[10px]">F</kbd> for Fake.
            </p>
          </div>
        ) : (
          /* Reveal Zone: Feedback, Streak status, Full Details, and Next button */
          <div className="mt-4 sm:mt-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            {/* Banner Result */}
            <div
              className={`p-4 border-3 sm:border-4 border-black shadow-[5px_5px_0px_0px_#000] text-center ${
                lastGuessWasCorrect
                  ? 'bg-[#4ADE80] text-black'
                  : 'bg-[#FF5252] text-black'
              }`}
            >
              <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-black font-heading uppercase">
                {lastGuessWasCorrect ? (
                  <>
                    <Sparkles className="w-6 h-6 fill-black" />
                    <span>CORRECT! +1 POINT</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-6 h-6 stroke-[3]" />
                    <span>WRONG! NO POINT</span>
                  </>
                )}
              </div>

              <div className="text-xs sm:text-sm font-bold mt-1">
                You guessed{' '}
                <span className="underline font-black">
                  {lastUserGuess ? 'REAL' : 'FAKE'}
                </span>
                . The model is indeed{' '}
                <span className="bg-black text-white px-1.5 py-0.5 font-black uppercase">
                  {model.isReal ? 'REAL' : 'FAKE'}
                </span>
                !
              </div>

              {/* Streak update announcement */}
              {lastGuessWasCorrect ? (
                <div className="mt-2 inline-flex items-center gap-1.5 bg-black text-[#FFE600] font-black text-xs px-3 py-1 uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 fill-[#FFE600]" />
                  <span>Streak: {streak}</span>
                  {streak >= 5 && <span>🔥 ON FIRE!</span>}
                </div>
              ) : (
                brokenStreakWas !== null && brokenStreakWas > 0 && (
                  <div className="mt-2 inline-flex items-center gap-1.5 bg-black text-[#FF6B6B] font-black text-xs px-3 py-1 uppercase tracking-wider">
                    <span>💥 Streak broken! Previous run: {brokenStreakWas}</span>
                  </div>
                )
              )}
            </div>

            {/* Model Identity & Verification Details */}
            <div className="bg-[#FFFDF5] border-3 border-black p-3.5 sm:p-4 text-left shadow-[3px_3px_0px_0px_#000]">
              <div className="text-[11px] font-black uppercase tracking-wider text-black/60 mb-1">
                Official Attribution / Source
              </div>
              <div className="text-sm sm:text-base font-extrabold text-black font-mono break-words">
                {model.fullNameWithCompany}
              </div>
            </div>

            {/* Next Model Control */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onNext}
                autoFocus
                className="w-full sm:w-auto min-w-[240px] bg-[#FFE600] hover:bg-[#FFD700] text-black border-4 border-black px-8 py-3.5 shadow-[5px_5px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000] font-black font-heading text-lg sm:text-xl uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>NEXT MODEL</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
                <span className="text-[11px] font-bold bg-black text-white px-2 py-0.5 ml-2 font-mono">
                  [Space]
                </span>
              </button>
            </div>

            {/* Auto-advance toggle */}
            <div className="flex items-center justify-center gap-2 pt-1 text-xs font-bold text-black/70">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={autoAdvance}
                  onChange={onToggleAutoAdvance}
                  className="w-4 h-4 accent-black border-2 border-black rounded-none cursor-pointer"
                />
                <span>Auto-advance (1.6s)</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
