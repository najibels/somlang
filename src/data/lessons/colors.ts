import { Lesson } from '../../types/lesson';

export const colors: Lesson = {
  id: 5,
  title: 'Colors',
  level: 'Beginner',
  xp: 25,
  questions: [
    {
      question: 'How do you say "Red" in Somali?',
      options: ['Guduud', 'Cagaar', 'Buluug', 'Madow'],
      correctAnswer: 'Guduud'
    },
    {
      question: 'What is "Blue" in Somali?',
      options: ['Buluug', 'Jaalle', 'Caddaan', 'Guduud'],
      correctAnswer: 'Buluug'
    }
  ]
};