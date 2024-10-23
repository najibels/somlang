import { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];