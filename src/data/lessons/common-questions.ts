import { Lesson } from '../../types/lesson';

export const commonQuestions: Lesson = {
  id: 10,
  title: 'Common Questions',
  level: 'Advanced',
  xp: 45,
  questions: [
    {
      question: 'How do you say "What is your name?" in Somali?',
      options: ['Magacaa?', 'Xaggee baad ka timid?', 'Immisa jir baad tahay?', 'Sidee tahay?'],
      correctAnswer: 'Magacaa?'
    },
    {
      question: 'What does "Sidee tahay?" mean?',
      options: ['How are you?', 'Where are you from?', 'What is your name?', 'How old are you?'],
      correctAnswer: 'How are you?'
    }
  ]
};