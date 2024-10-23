import { Lesson } from '../../types/lesson';

export const foodAndDrinks: Lesson = {
  id: 6,
  title: 'Food & Drinks',
  level: 'Intermediate',
  xp: 30,
  questions: [
    {
      question: 'What is "Water" in Somali?',
      options: ['Biyo', 'Caano', 'Shaah', 'Qaxwo'],
      correctAnswer: 'Biyo'
    },
    {
      question: 'How do you say "Tea" in Somali?',
      options: ['Shaah', 'Biyo', 'Caano', 'Qaxwo'],
      correctAnswer: 'Shaah'
    }
  ]
};