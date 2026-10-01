import React, { useState } from 'react';
import { Volume2, VolumeX, History, RotateCcw, HelpCircle } from 'lucide-react';
import { sounds } from '../utils/sound.ts';

interface HeaderProps {
  onOpenHistory: () => void;
  onOpenRules: () => void;
  onResetGame: () => void;
  historyCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenHistory,
  onOpenRules,
  onResetGame,
  historyCount,
}) => {
  const [isMuted, setIsMuted] = useState(() => sounds.getMuted());

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="w-full bg-[#FFFDF5] border-b-4 border-black px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30">
      {/* Zone 1: Wordmark */}
      <div className="flex items-center gap-2.5">
        <div className="bg-[#FFE600] text-black font-black text-xs sm:text-sm px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase tracking-wider">
          AI TRIVIA
        </div>
        <h1 className="text-lg sm:text-2xl font-black tracking-tight text-black flex items-center gap-1.5 font-heading">
          <span>REAL</span>
          <span className="text-[#FF5252]">OR</span>
          <span>FAKE?</span>
        </h1>
      </div>

      {/* Zone 2: Navigation / Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={handleToggleSound}
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
          className="p-2 sm:px-3 sm:py-1.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-yellow-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-1.5 text-xs font-bold"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4 text-green-700" />}
          <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Sound'}</span>
        </button>

        <button
          onClick={onOpenHistory}
          title="View recent answer history"
          className="p-2 sm:px-3 sm:py-1.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-yellow-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-1.5 text-xs font-bold"
        >
          <History className="w-4 h-4 text-black" />
          <span className="hidden sm:inline">History</span>
          {historyCount > 0 && (
            <span className="bg-black text-white text-[10px] font-black px-1.5 py-0.2 rounded-none">
              {historyCount}
            </span>
          )}
        </button>

        <button
          onClick={onOpenRules}
          title="Game Rules & Keys"
          className="p-2 sm:px-3 sm:py-1.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-yellow-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-1.5 text-xs font-bold"
        >
          <HelpCircle className="w-4 h-4 text-black" />
          <span className="hidden sm:inline">Rules</span>
        </button>

        <button
          onClick={() => {
            if (window.confirm('Reset current game and start fresh with a new shuffle?')) {
              onResetGame();
            }
          }}
          title="Restart Game"
          className="p-2 sm:px-3 sm:py-1.5 bg-[#FFD54F] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFCA28] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-1.5 text-xs font-bold text-black"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="hidden md:inline">Restart</span>
        </button>
      </div>
    </header>
  );
};
