import { Lesson } from '../../types/lesson';

export const basicVerbs: Lesson = {
  id: 9,
  title: 'Basic Verbs',
  level: 'Advanced',
  xp: 40,
  questions: [
    {
      question: 'How do you say "To eat" in Somali?',
      options: ['Cunid', 'Cabid', 'Socod', 'Seexasho'],
      correctAnswer: 'Cunid'
    },
    {
      question: 'What is "To sleep" in Somali?',
      options: ['Seexasho', 'Socod', 'Cunid', 'Cabid'],
      correctAnswer: 'Seexasho'
    }
  ]
};