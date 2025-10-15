import type { NounData } from '../types/nounGenders.types';

export const colorVariants = {
  blue: {
    text: 'text-blue-700',
    bg: 'bg-blue-50',
    ring: 'ring-blue-500',
    border: 'border-blue-400',
  },
  rose: {
    text: 'text-rose-700',
    bg: 'bg-rose-50',
    ring: 'ring-rose-500',
    border: 'border-rose-400',
  },
  green: {
    text: 'text-green-700',
    bg: 'bg-green-50',
    ring: 'ring-green-500',
    border: 'border-green-400',
  },
};

export const masculineNouns: NounData = {
  endings: [
    {
      ending: '-ling',
      examples: ['der Schwächling', 'der Schmetterling', 'der Liebling'],
      exceptions: [],
    },
    {
      ending: '-ig',
      examples: ['der Käfig', 'der Honig', 'der König'],
      exceptions: ['die Königin (queen)'],
    },
    {
      ending: '-ich',
      examples: ['der Teppich', 'der Sittich', 'der Pfirsich'],
      exceptions: ['das Reich (kingdom)'],
    },
    {
      ending: '-ant',
      examples: ['der Elefant', 'der Lieferant', 'der Gigant'],
      exceptions: ['das Restaurant', 'die Want'],
    },
    {
      ending: '-ast',
      examples: ['der Kontrast', 'der Gast', 'der Mast'],
      exceptions: [],
    },
    {
      ending: '-or',
      examples: ['der Faktor', 'der Motor', 'der Professor'],
      exceptions: ['das Labor (laboratory)'],
    },
    {
      ending: '-us',
      examples: ['der Zirkus', 'der Bonus', 'der Genius'],
      exceptions: [],
    },
    {
      ending: '-ismus',
      examples: ['der Tourismus', 'der Optimismus', 'der Realismus'],
      exceptions: [],
    },
    {
      ending: '-er (!)',
      examples: ['der Fehler', 'der Fahrer', 'der Lehrer'],
      exceptions: [
        'das Messer (knife)',
        'das Fenster (window)',
        'das Wasser (water)',
        'die Butter (butter)',
        'die Feder (feather)',
      ],
    },
    {
      ending: '-en (!)',
      examples: ['der Hafen', 'der Ofen', 'der Garten'],
      exceptions: [
        'die Butter (butter)',
        'die Regel (rule)',
        'die Wurzel (root)',
        'die Geisel (hostage)',
      ],
    },
    {
      ending: '-el (!)',
      examples: ['der Flügel', 'der Vogel', 'der Apfel'],
      exceptions: [
        'die Zwiebel (onion)',
        'die Kugel (ball)',
        'die Nadel (needle)',
        'das Mantel (coat)',
      ],
    },
  ],
  groups: [
    {
      group: 'Male Persons',
      examples: ['der Mann', 'der Vater', 'der Onkel'],
      exceptions: [],
    },
    {
      group: 'Male Professions',
      examples: ['der Lehrer', 'der Architekt', 'der Arzt'],
      exceptions: [],
    },
    {
      group: 'Male Animals',
      examples: ['der Löwe', 'der Hahn', 'der Bär'],
      exceptions: [],
    },
    {
      group: 'Days of the Week',
      examples: ['der Sonntag', 'der Montag', 'der Dienstag'],
      exceptions: [],
    },
    {
      group: 'Months & Seasons',
      examples: ['der Dezember', 'der Frühling', 'der August'],
      exceptions: [],
    },
    {
      group: 'Cardinal Directions',
      examples: ['der Norden', 'der Westen', 'der Süden'],
      exceptions: [],
    },
    {
      group: 'Rocks and Minerals',
      examples: ['der Stein', 'der Diamant', 'der Granit'],
      exceptions: [],
    },
    {
      group: '“-er” Nominalisations',
      examples: ['der Fahrer', 'der Sprecher', 'der Richter'],
      exceptions: [],
    },
    {
      group: 'Currency',
      examples: ['der Dollar', 'der Euro', 'der Franken'],
      exceptions: [],
    },
    {
      group: 'Cars',
      examples: ['der BMW', 'der Ferrari', 'der Mercedes'],
      exceptions: [],
    },
    {
      group: 'Alcoholic & Plant Drinks',
      examples: ['der Gin', 'der Wein', 'der Kaffee'],
      exceptions: [],
    },
    {
      group: 'Outer Space',
      examples: ['der Mond', 'der Mars', 'der Merkur'],
      exceptions: [],
    },
  ],
};

export const feminineNouns: NounData = {
  endings: [
    {
      ending: '-ei',
      examples: ['die Polizei', 'die Bücherei', 'die Malerei'],
      exceptions: [],
    },
    {
      ending: '-ie',
      examples: ['die Biologie', 'die Psychologie', 'die Philosophie'],
      exceptions: [],
    },
    {
      ending: '-schaft',
      examples: ['die Gesellschaft', 'die Mannschaft', 'die Wirtschaft'],
      exceptions: [],
    },
    {
      ending: '-anz',
      examples: ['die Eleganz', 'die Distanz', 'die Toleranz'],
      exceptions: [],
    },
    {
      ending: '-enz',
      examples: ['die Frequenz', 'die Konferenz', 'die Kompetenz'],
      exceptions: [],
    },
    {
      ending: '-heit',
      examples: ['die Gesundheit', 'die Freiheit', 'die Wahrheit'],
      exceptions: [],
    },
    {
      ending: '-keit',
      examples: ['die Höflichkeit', 'die Möglichkeit', 'die Geschwindigkeit'],
      exceptions: [],
    },
    {
      ending: '-ion',
      examples: ['die Nation', 'die Religion', 'die Tradition'],
      exceptions: [],
    },
    {
      ending: '-ung',
      examples: ['die Zeitung', 'die Wohnung', 'die Bildung'],
      exceptions: [],
    },
    {
      ending: '-tät',
      examples: ['die Aktivität', 'die Universität', 'die Qualität'],
      exceptions: [],
    },
    {
      ending: '-ik',
      examples: ['die Musik', 'die Logik', 'die Politik'],
      exceptions: [],
    },
    {
      ending: '-sis',
      examples: ['die Praxis', 'die Krise', 'die Basis'],
      exceptions: [],
    },
    {
      ending: '-ur',
      examples: ['die Natur', 'die Kultur', 'die Literatur'],
      exceptions: [],
    },
    {
      ending: '-e (!)',
      examples: ['die Blume', 'die Lampe', 'die Straße'],
      exceptions: ['der Junge', 'der Name', 'der Kunde', 'der Glaube'],
    },
  ],
  groups: [
    {
      group: 'Female Persons',
      examples: ['die Frau', 'die Dame', 'die Mutter'],
      exceptions: [
        'das Weib (woman, derogatory)',
        'das Fräulein (young woman)',
        'das Mädchen (girl)',
      ],
    },
    {
      group: 'Female Professions',
      examples: ['die Lehrerin', 'die Architektin', 'die Ärztin'],
      exceptions: [],
    },
    {
      group: 'Female Animals',
      examples: ['die Löwin', 'die Katze', 'die Gans'],
      exceptions: [],
    },
    {
      group: 'Numbers',
      examples: ['die Null', 'die Eins', 'die Million', 'die Milliarde'],
      exceptions: [],
    },
    {
      group: 'Trees, Fruits, Flowers',
      examples: ['die Birke', 'die Eiche', 'die Tulpe'],
      exceptions: [
        'der Ahorn (maple)',
        'der Apfel (apple)',
        'der Löwenzahn (dandelion)',
      ],
    },
    {
      group: 'Rivers in DE, AU, CH',
      examples: ['die Donau', 'die Elbe', 'die Mosel'],
      exceptions: ['der Inn', 'der Rhein', 'der Main'],
    },
  ],
};

export const neuterNouns: NounData = {
  endings: [
    {
      ending: '-ment',
      examples: ['das Instrument', 'das Dokument', 'das Parlament'],
      exceptions: [],
    },
    {
      ending: '-tel',
      examples: ['das Viertel', 'das Drittel', 'das Drittel'],
      exceptions: [],
    },
    {
      ending: '-chen',
      examples: ['das Mädchen', 'das Märchen', 'das Kätzchen'],
      exceptions: [],
    },
    {
      ending: '-lein',
      examples: ['das Häuslein', 'das Bächlein', 'das Brüderlein'],
      exceptions: [],
    },
    {
      ending: '-tum',
      examples: ['das Eigentum', 'das Wachstum', 'das Christentum'],
      exceptions: [],
    },
    {
      ending: '-ma',
      examples: ['das Drama', 'das Thema', 'das Klima'],
      exceptions: [],
    },
    {
      ending: '-icht',
      examples: ['das Licht', 'das Gericht', 'das Gedicht'],
      exceptions: [],
    },
    {
      ending: '-il',
      examples: ['das Ventil', 'das Profil', 'das Reptil'],
      exceptions: [],
    },
    {
      ending: '-it',
      examples: ['das Gebiet', 'das Kredit', 'das Bandit'],
      exceptions: [],
    },
    {
      ending: '-nis (!)',
      examples: ['das Erlebnis', 'das Ergebnis', 'das Bewusstsein'],
      exceptions: ['die Erinnerung', 'die Kenntnis'],
    },
    {
      ending: '-sal (!)',
      examples: ['das Schicksal', 'das Labsal', 'das Pensum'],
      exceptions: [],
    },
  ],
  groups: [
    {
      group: 'Colors',
      examples: ['das Blau', 'das Rot', 'das Grün'],
      exceptions: [],
    },
    {
      group: 'Letters',
      examples: ['das A', 'das B', 'das C'],
      exceptions: [],
    },
    {
      group: 'Fractions',
      examples: ['das Drittel', 'das Viertel', 'das Fünftel'],
      exceptions: [],
    },
    {
      group: 'Young Persons',
      examples: ['das Kind', 'das Baby', 'das Neugeborene'],
      exceptions: [],
    },
    {
      group: 'Baby Animals',
      examples: ['das Kätzchen', 'das Ferkel', 'das Lämmchen'],
      exceptions: [],
    },
    {
      group: 'Languages',
      examples: ['das Deutsch', 'das Englisch', 'das Französisch'],
      exceptions: ['die Schweiz', 'die Türkei'],
    },
    {
      group: 'English -ing Forms (loanwords)',
      examples: ['das Training', 'das Meeting', 'das Coaching'],
      exceptions: [],
    },
    {
      group: 'Hotels, Cafés, Restaurants',
      examples: ['das Hotel', 'das Restaurant', 'das Café'],
      exceptions: [],
    },
    {
      group: 'Verb Nominalizations',
      examples: ['das Essen', 'das Reisen', 'das Schlafen'],
      exceptions: [],
    },
    {
      group: 'Adjective Nominalizations',
      examples: ['das Gute', 'das Neue', 'das Alte'],
      exceptions: [],
    },
  ],
};
