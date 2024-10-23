import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (correct: boolean) => void;
}

export function QuizCard({ question, options, correctAnswer, onAnswer }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    setShowResult(true);
    const isCorrect = option === correctAnswer;
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">{question}</h3>
      <div className="grid grid-cols-1 gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => !showResult && handleAnswer(option)}
            disabled={showResult}
            className={`p-4 rounded-lg text-left transition-all ${
              showResult
                ? option === correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : option === selectedAnswer
                  ? 'bg-red-100 border-red-500'
                  : 'bg-gray-100'
                : 'bg-gray-100 hover:bg-gray-200'
            } border-2 ${
              showResult && option === selectedAnswer ? 'border-current' : 'border-transparent'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {showResult && option === correctAnswer && (
                <CheckCircle className="w-6 h-6 text-green-500" />
              )}
              {showResult && option === selectedAnswer && option !== correctAnswer && (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}