import { Lesson } from '../../types/lesson';

export const basicGreetings: Lesson = {
  id: 1,
  title: 'Basic Greetings',
  level: 'Beginner',
  xp: 10,
  questions: [
    {
      question: 'How do you say "Hello" in Somali?',
      options: ['Nabadey', 'Waad mahadsantahay', 'Nabad gelyo', 'Ma nabad baa'],
      correctAnswer: 'Nabadey'
    },
    {
      question: 'What does "Iska waran" mean?',
      options: ['How are you?', 'Goodbye', 'Thank you', 'Welcome'],
      correctAnswer: 'How are you?'
    },
    {
      question: 'How do you say "Good morning" in Somali?',
      options: ['Subax wanaagsan', 'Habeen wanaagsan', 'Galab wanaagsan', 'Fiid wanaagsan'],
      correctAnswer: 'Subax wanaagsan'
    }
  ]
};