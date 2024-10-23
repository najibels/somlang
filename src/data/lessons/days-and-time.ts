import { Lesson } from '../../types/lesson';

export const daysAndTime: Lesson = {
  id: 7,
  title: 'Days & Time',
  level: 'Intermediate',
  xp: 30,
  questions: [
    {
      question: 'How do you say "Today" in Somali?',
      options: ['Maanta', 'Berri', 'Shalay', 'Sabtida'],
      correctAnswer: 'Maanta'
    },
    {
      question: 'What is "Tomorrow" in Somali?',
      options: ['Berri', 'Maanta', 'Shalay', 'Jimcaha'],
      correctAnswer: 'Berri'
    }
  ]
};