import { Lesson } from '../../types/lesson';

export const familyMembers: Lesson = {
  id: 3,
  title: 'Family Members',
  level: 'Beginner',
  xp: 20,
  questions: [
    {
      question: 'How do you say "Mother" in Somali?',
      options: ['Hooyo', 'Aabo', 'Walaal', 'Adeer'],
      correctAnswer: 'Hooyo'
    },
    {
      question: 'What is "Father" in Somali?',
      options: ['Aabo', 'Hooyo', 'Ayeeyo', 'Abti'],
      correctAnswer: 'Aabo'
    },
    {
      question: 'How do you say "Sister" in Somali?',
      options: ['Walaal', 'Ina abti', 'Adeer', 'Ayeeyo'],
      correctAnswer: 'Walaal'
    }
  ]
};