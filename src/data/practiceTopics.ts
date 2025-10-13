import type { PracticeTopic } from '@/types/practice.types';

export const practiceTopics: PracticeTopic[] = [
  {
    id: 1,
    title: 'Noun Genders',
    description:
      'Learn to identify and use masculine, feminine, and neuter nouns correctly.',
    imageUrl: '/images/practice_topics/thumbnails/noun_genders_thumbnail.webp',
    path: '/practice/noun-genders',
    available: true,
  },
  {
    id: 2,
    title: 'Cases',
    description:
      'Practice nominative, accusative, dative, and genitive case usage in sentences.',
    imageUrl: '/images/practice_topics/thumbnails/cases_thumbnail.webp',
    path: '/practice/cases',
    available: false,
  },
  {
    id: 3,
    title: 'Verb Conjugation',
    description: 'Master regular and irregular verb forms in different tenses.',
    imageUrl:
      '/images/practice_topics/thumbnails/verb_conjugation_thumbnail.webp',
    path: '/practice/verb-conjugation',
    available: false,
  },
  {
    id: 4,
    title: 'Prepositions',
    description:
      'Understand prepositions and their required cases with practice exercises.',
    imageUrl: '/images/practice_topics/thumbnails/prepositions_thumbnail.webp',
    path: '/practice/prepositions',
    available: false,
  },
  {
    id: 5,
    title: 'Sentence Structure',
    description:
      'Train your skills in building correct word order and sentence types.',
    imageUrl:
      '/images/practice_topics/thumbnails/sentence_structure_thumbnail.webp',
    path: '/practice/sentence-structure',
    available: false,
  },
];
