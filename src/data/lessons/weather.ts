import { Lesson } from '../../types/lesson';

export const weather: Lesson = {
  id: 8,
  title: 'Weather',
  level: 'Intermediate',
  xp: 35,
  questions: [
    {
      question: 'How do you say "Hot" in Somali?',
      options: ['Kulul', 'Qabow', 'Roob', 'Qorrax'],
      correctAnswer: 'Kulul'
    },
    {
      question: 'What is "Rain" in Somali?',
      options: ['Roob', 'Dabayl', 'Qorrax', 'Daruur'],
      correctAnswer: 'Roob'
    }
  ]
};