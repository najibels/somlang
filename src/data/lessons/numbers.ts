import { Lesson } from '../../types/lesson';

export const numbers: Lesson = {
  id: 2,
  title: 'Numbers 1-10',
  level: 'Beginner',
  xp: 15,
  questions: [
    {
      question: 'What is "One" in Somali?',
      options: ['Hal', 'Labo', 'Saddex', 'Afar'],
      correctAnswer: 'Hal'
    },
    {
      question: 'How do you say "Five" in Somali?',
      options: ['Shan', 'Labo', 'Toddoba', 'Sideed'],
      correctAnswer: 'Shan'
    },
    {
      question: 'What is "Ten" in Somali?',
      options: ['Toban', 'Sagaal', 'Sideed', 'Toddoba'],
      correctAnswer: 'Toban'
    }
  ]
};