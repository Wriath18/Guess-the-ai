import React from 'react';
import { Flame, Trophy, Award, Target, ZapOff } from 'lucide-react';
import { GameStats } from '../types.ts';

interface ScoreBoardProps {
  stats: GameStats;
  brokenStreakWas: number | null;
  roundNumber: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  stats,
  brokenStreakWas,
  roundNumber,
}) => {
  const accuracy = stats.totalAnswered > 0 
    ? Math.round((stats.correctCount / stats.totalAnswered) * 100) 
    : 0;

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-4 max-w-4xl mx-auto px-4">
      {/* 1. SCORE */}
      <div className="bg-white border-3 sm:border-4 border-black p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-black/70 mb-1">
          <span>Score</span>
          <Award className="w-4 h-4 text-black" />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl sm:text-4xl font-black font-heading tabular-nums text-black">
            {stats.score}
          </span>
          <span className="text-xs font-bold text-black/60">pts</span>
        </div>
      </div>

      {/* 2. STREAK */}
      <div className={`border-3 sm:border-4 border-black p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between transition-colors ${
        stats.streak > 0 
          ? 'bg-[#FFE600]' 
          : brokenStreakWas 
            ? 'bg-[#FEE2E2]' 
            : 'bg-white'
      }`}>
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-black/70 mb-1">
          <span>Current Streak</span>
          {stats.streak > 0 ? (
            <Flame className="w-4 h-4 text-orange-600 fill-orange-500 animate-pulse" />
          ) : brokenStreakWas ? (
            <ZapOff className="w-4 h-4 text-red-600" />
          ) : (
            <Flame className="w-4 h-4 text-black/30" />
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-black font-heading tabular-nums text-black">
            {stats.streak}
          </span>
          {stats.streak > 2 && (
            <span className="text-xs font-black uppercase tracking-tight text-orange-800 bg-white/70 px-1.5 py-0.5 border border-black">
              On fire!
            </span>
          )}
          {brokenStreakWas !== null && stats.streak === 0 && (
            <span className="text-[11px] font-black uppercase tracking-tight text-red-700 bg-red-100 px-1 border border-red-500">
              Broken ({brokenStreakWas})
            </span>
          )}
        </div>
      </div>

      {/* 3. BEST STREAK */}
      <div className="bg-white border-3 sm:border-4 border-black p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-black/70 mb-1">
          <span>Best Streak</span>
          <Trophy className="w-4 h-4 text-yellow-600" />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl sm:text-4xl font-black font-heading tabular-nums text-black">
            {stats.bestStreak}
          </span>
          <span className="text-xs font-bold text-black/60">record</span>
        </div>
      </div>

      {/* 4. PROGRESS / ACCURACY */}
      <div className="bg-white border-3 sm:border-4 border-black p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-black/70 mb-1">
          <span>Round {roundNumber}</span>
          <Target className="w-4 h-4 text-black" />
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-xl sm:text-2xl font-black font-heading tabular-nums text-black">
            {stats.totalAnswered > 0 ? `${accuracy}%` : '—'}
          </span>
          <span className="text-[11px] font-bold text-black/60 tabular-nums">
            {stats.correctCount}/{stats.totalAnswered} correct
          </span>
        </div>
      </div>
    </div>
  );
};
