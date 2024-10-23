import React from 'react';
import { Heart } from 'lucide-react';

interface ProgressBarProps {
  lives: number;
  progress: number;
  xp: number;
}

export function ProgressBar({ lives, progress, xp }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className={`w-6 h-6 ${
                i < lives ? 'text-red-500 fill-red-500' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="flex-1 mx-8">
          <div className="h-3 bg-gray-200 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="font-bold text-yellow-500">{xp} XP</div>
      </div>
    </div>
  );
}