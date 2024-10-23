import { Lesson } from '../../types/lesson';

export const commonPhrases: Lesson = {
  id: 4,
  title: 'Common Phrases',
  level: 'Beginner',
  xp: 20,
  questions: [
    {
      question: 'How do you say "Thank you" in Somali?',
      options: ['Waad mahadsantahay', 'Nabadey', 'Ma nabad baa', 'Nabad gelyo'],
      correctAnswer: 'Waad mahadsantahay'
    },
    {
      question: 'What does "Soo dhawoow" mean?',
      options: ['Welcome', 'Goodbye', 'Please', 'Sorry'],
      correctAnswer: 'Welcome'
    }
  ]
};