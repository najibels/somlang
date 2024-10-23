import React from 'react';
import { BookOpen, Star, Trophy } from 'lucide-react';

interface LessonCardProps {
  title: string;
  level: string;
  xp: number;
  completed: boolean;
  onClick: () => void;
}

export function LessonCard({ title, level, xp, completed, onClick }: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-xl transition-all transform hover:scale-105 ${
        completed ? 'bg-green-100 hover:bg-green-200' : 'bg-white hover:bg-gray-50'
      } shadow-md flex items-center justify-between`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${completed ? 'bg-green-500' : 'bg-blue-500'}`}>
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div className="text-left">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{level}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {completed && <Trophy className="w-5 h-5 text-yellow-500" />}
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium">{xp} XP</span>
        </div>
      </div>
    </button>
  );
}