export type VerbWithPreposition = {
  id: number;
  verb: string;
  preposition: string;
  case: 'accusative' | 'dative' | 'genitive';
  translation: string;
  example: string;
  exampleTranslation?: string;
  reflexive: boolean;
  level?: 'A1' | 'A2' | 'B1' | 'B2';
};

export type VerbExample = {
  label: string;
  example: string;
  translation: string;
};

export type PrepositionGroup = {
  preposition: string;
  accent: {
    text: string;
    bg: string;
    border: string;
    soft: string;
    badge: string;
  };
  description: string;
  notes: string[];
  examples: VerbExample[];
};
