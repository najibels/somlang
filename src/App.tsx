import React, { useState } from 'react';
import { LessonCard } from './components/LessonCard';
import { QuizCard } from './components/QuizCard';
import { ProgressBar } from './components/ProgressBar';
import { GraduationCap } from 'lucide-react';
import { lessons } from './data/lessons';

function App() {
  const [currentLesson, setCurrentLesson] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lives, setLives] = useState(3);
  const [xp, setXp] = useState(0);

  const handleStartLesson = (lessonId: number) => {
    setCurrentLesson(lessonId);
    setCurrentQuestion(0);
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      if (currentLesson === null) return;
      
      const lesson = lessons.find(l => l.id === currentLesson);
      if (!lesson) return;

      if (currentQuestion === lesson.questions.length - 1) {
        setCompletedLessons([...completedLessons, currentLesson]);
        setXp(xp + lesson.xp);
        setCurrentLesson(null);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      setLives(lives - 1);
      if (lives <= 1) {
        setCurrentLesson(null);
        setLives(3);
      }
    }
  };

  const currentLessonData = currentLesson 
    ? lessons.find(l => l.id === currentLesson) 
    : null;

  return (
    <div className="min-h-screen bg-gray-100">
      <ProgressBar 
        lives={lives} 
        progress={currentLesson ? ((currentQuestion + 1) / (currentLessonData?.questions.length || 1)) * 100 : 0}
        xp={xp}
      />
      
      <div className="max-w-4xl mx-auto pt-24 px-4">
        {currentLesson === null ? (
          <>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold">Learn Somali</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  title={lesson.title}
                  level={lesson.level}
                  xp={lesson.xp}
                  completed={completedLessons.includes(lesson.id)}
                  onClick={() => handleStartLesson(lesson.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center py-8">
            {currentLessonData && (
              <QuizCard
                question={currentLessonData.questions[currentQuestion].question}
                options={currentLessonData.questions[currentQuestion].options}
                correctAnswer={currentLessonData.questions[currentQuestion].correctAnswer}
                onAnswer={handleAnswer}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;