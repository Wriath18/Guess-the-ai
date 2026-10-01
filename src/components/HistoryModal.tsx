import React, { useState } from 'react';
import { X, Check, X as WrongIcon, Filter } from 'lucide-react';
import { AnswerRecord } from '../types.ts';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: AnswerRecord[];
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  history,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong'>('all');

  if (!isOpen) return null;

  const filteredHistory = history.filter((item) => {
    if (filter === 'correct') return item.isCorrect;
    if (filter === 'wrong') return !item.isCorrect;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6 max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="history-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-3 border-black pb-4 mb-4">
          <div>
            <h2 id="history-modal-title" className="text-xl sm:text-2xl font-black font-heading tracking-tight uppercase">
              Answer History ({history.length})
            </h2>
            <p className="text-xs font-bold text-black/60">
              Review models you encountered this session
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white hover:bg-red-100 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
            aria-label="Close history modal"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-black/60" />
          <div className="flex gap-1.5">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-xs font-black uppercase border-2 border-black transition-all ${
                filter === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-yellow-100'
              }`}
            >
              All ({history.length})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1 text-xs font-black uppercase border-2 border-black transition-all ${
                filter === 'correct'
                  ? 'bg-[#22C55E] text-black font-black'
                  : 'bg-white text-black hover:bg-yellow-100'
              }`}
            >
              Correct ({history.filter((h) => h.isCorrect).length})
            </button>
            <button
              onClick={() => setFilter('wrong')}
              className={`px-3 py-1 text-xs font-black uppercase border-2 border-black transition-all ${
                filter === 'wrong'
                  ? 'bg-[#EF4444] text-white font-black'
                  : 'bg-white text-black hover:bg-yellow-100'
              }`}
            >
              Wrong ({history.filter((h) => !h.isCorrect).length})
            </button>
          </div>
        </div>

        {/* List of answers */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
          {filteredHistory.length === 0 ? (
            <div className="text-center py-12 text-sm font-bold text-black/50 border-2 border-dashed border-black/30 p-6">
              No models answered yet in this filter.
            </div>
          ) : (
            filteredHistory.map((item) => (
              <div
                key={item.id}
                className="border-2 border-black p-3 bg-[#FFFDF5] shadow-[2px_2px_0px_0px_#000] flex flex-col gap-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center w-5 h-5 border border-black text-xs font-black ${
                        item.isCorrect ? 'bg-[#4ADE80] text-black' : 'bg-[#FF5252] text-white'
                      }`}
                    >
                      {item.isCorrect ? <Check className="w-3.5 h-3.5" /> : <WrongIcon className="w-3.5 h-3.5" />}
                    </span>
                    <span className="text-base font-black font-heading text-black">
                      {item.model.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-black/60">
                      You: <b className="uppercase">{item.userGuess ? 'Real' : 'Fake'}</b>
                    </span>
                    <span
                      className={`text-[10px] font-black uppercase px-1.5 py-0.5 border border-black ${
                        item.model.isReal
                          ? 'bg-[#4ADE80] text-black'
                          : 'bg-[#FF5252] text-white'
                      }`}
                    >
                      {item.model.isReal ? 'REAL' : 'FAKE'}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-black/80 pl-7 break-words">
                  {item.model.fullNameWithCompany}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t-3 border-black pt-3 mt-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black text-white hover:bg-neutral-800 font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_#FFE600] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
