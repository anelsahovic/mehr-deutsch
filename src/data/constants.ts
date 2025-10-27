import type { PracticeTopic } from '@/types/practice.types';

export const practiceTopics: PracticeTopic[] = [
  {
    id: 1,
    title: 'Noun Genders',
    subtitle: 'Der, Die, Das',
    description:
      'Learn to identify and use masculine, feminine, and neuter nouns correctly.',
    imageUrl: '/images/practice_topics/thumbnails/noun_genders_thumbnail.webp',
    path: '/topics/noun-genders',
    available: true,
  },
  {
    id: 2,
    title: 'Cases',
    subtitle: 'Nominativ, Akkusativ, Dativ, Genitiv',
    description:
      'Practice nominative, accusative, dative, and genitive case usage in sentences.',
    imageUrl: '/images/practice_topics/thumbnails/cases_thumbnail.webp',
    path: '/topics/cases',
    available: false,
  },
  {
    id: 3,
    title: 'Verb Conjugation',
    subtitle: 'Präsens, Präteritum, Perfekt',
    description: 'Master regular and irregular verb forms in different tenses.',
    imageUrl:
      '/images/practice_topics/thumbnails/verb_conjugation_thumbnail.webp',
    path: '/topics/verb-conjugation',
    available: false,
  },
  {
    id: 4,
    title: 'Prepositions',
    subtitle: 'mit, zu, für, bei, nach',
    description:
      'Understand prepositions and their required cases with practice exercises.',
    imageUrl: '/images/practice_topics/thumbnails/prepositions_thumbnail.webp',
    path: '/topics/prepositions',
    available: false,
  },
  {
    id: 5,
    title: 'Sentence Structure',
    subtitle: 'Wortstellung, Fragen, Nebensatz',
    description:
      'Train your skills in building correct word order and sentence types.',
    imageUrl:
      '/images/practice_topics/thumbnails/sentence_structure_thumbnail.webp',
    path: '/topics/sentence-structure',
    available: false,
  },
];

export const navLinks = [
  {
    id: 101,
    title: 'Home',
    path: '/',
    available: true,
  },
  {
    id: 102,
    title: 'About',
    path: '/about',
    available: true,
  },
  {
    id: 103,
    title: 'Help',
    path: '/help',
    available: true,
  },
];

export const soonLinks = [
  {
    id: 104,
    title: 'My Profile',
    path: '/my-profile',
    available: false,
  },
  {
    id: 105,
    title: 'Leaderboard',
    path: '/leaderboard',
    available: false,
  },
  {
    id: 106,
    title: 'Settings',
    path: '/settings',
    available: false,
  },
];

export const DAILY_TIPS: string[] = [
  'Speak a little German every day, even to yourself.',
  'Watch German movies with subtitles, then without.',
  'Build themed vocabulary lists for topics you love.',
  'Write a daily journal entry in German—no matter how short.',
  'Listen to German podcasts during your commute.',
  'Find a language partner to chat weekly.',
  'Label everyday items at home with their German names.',
  'Try reading the news in simple German online.',
  'Shadow native audio: repeat sentences just after hearing them.',
  'Practice small talk: introduce yourself in different scenarios.',
];
