import type { PrepositionGroup } from '../types';

export const prepositionGroups: PrepositionGroup[] = [
  {
    preposition: 'AN',
    accent: {
      text: 'text-rose-800',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      soft: 'bg-rose-100',
      badge: 'bg-rose-200 text-rose-800',
    },
    description:
      "In verb + preposition combinations, the two-way preposition 'an' can appear with accusative or dative. In many common expressions, 'an + accusative' is used with verbs connected to mental focus or direction, while 'an + dative' often appears in expressions linked to states, conditions, or connection to something.",
    notes: [
      'Common accusative patterns include mental focus, for example: denken an, glauben an, sich erinnern an.',
      'Common dative patterns include more abstract connection or condition, for example: leiden an, arbeiten an, zweifeln an.',
    ],
    examples: [
      {
        label: 'denken an + Akkusativ',
        example: 'Ich denke an meine Familie.',
        translation: 'I am thinking about my family.',
      },
      {
        label: 'glauben an + Akkusativ',
        example: 'Sie glaubt an ihre Zukunft.',
        translation: 'She believes in her future.',
      },
      {
        label: 'sich erinnern an + Akkusativ',
        example: 'Er erinnert sich an den Urlaub.',
        translation: 'He remembers the vacation.',
      },
      {
        label: 'arbeiten an + Dativ',
        example: 'Ich arbeite an einem neuen Projekt.',
        translation: 'I am working on a new project.',
      },
      {
        label: 'leiden an + Dativ',
        example: 'Er leidet an einer Allergie.',
        translation: 'He suffers from an allergy.',
      },
    ],
  },
  {
    preposition: 'AUF',
    accent: {
      text: 'text-sky-800',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      soft: 'bg-sky-100',
      badge: 'bg-sky-200 text-sky-800',
    },
    description:
      "In verb + preposition combinations, 'auf' is used very often with the accusative case. Many of these expressions point toward a goal, expectation, reaction, or mental direction, which is why learners often meet forms like warten auf, sich freuen auf, and achten auf early in German study.",
    notes: [
      'Very common with accusative: warten auf, hoffen auf, achten auf, sich freuen auf.',
      "It is practical to memorize all 'auf' combinations as full chunks because they are frequent and easy to confuse in direct translation.",
    ],
    examples: [
      {
        label: 'warten auf + Akkusativ',
        example: 'Ich warte auf den Zug.',
        translation: 'I am waiting for the train.',
      },
      {
        label: 'achten auf + Akkusativ',
        example: 'Achte auf die Aussprache.',
        translation: 'Pay attention to the pronunciation.',
      },
      {
        label: 'sich freuen auf + Akkusativ',
        example: 'Wir freuen uns auf das Wochenende.',
        translation: 'We are looking forward to the weekend.',
      },
      {
        label: 'hoffen auf + Akkusativ',
        example: 'Sie hoffen auf besseres Wetter.',
        translation: 'They hope for better weather.',
      },
      {
        label: 'sich konzentrieren auf + Akkusativ',
        example: 'Konzentriere dich auf die Aufgabe.',
        translation: 'Concentrate on the task.',
      },
    ],
  },
  {
    preposition: 'ÜBER',
    accent: {
      text: 'text-violet-800',
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      soft: 'bg-violet-100',
      badge: 'bg-violet-200 text-violet-800',
    },
    description:
      "In verb + preposition expressions, 'über' is commonly used with the accusative case. It often introduces the topic of speaking, thinking, discussing, reacting, or feelings about something.",
    notes: [
      'Typical topic-related verbs are sprechen über, reden über, diskutieren über, nachdenken über.',
      'It is also common in emotional or reflexive expressions like sich freuen über and sich ärgern über.',
    ],
    examples: [
      {
        label: 'sprechen über + Akkusativ',
        example: 'Wir sprechen über das Problem.',
        translation: 'We are talking about the problem.',
      },
      {
        label: 'diskutieren über + Akkusativ',
        example: 'Die Klasse diskutiert über Politik.',
        translation: 'The class is discussing politics.',
      },
      {
        label: 'nachdenken über + Akkusativ',
        example: 'Ich denke über deine Idee nach.',
        translation: 'I am thinking about your idea.',
      },
      {
        label: 'sich freuen über + Akkusativ',
        example: 'Sie freut sich über das Geschenk.',
        translation: 'She is happy about the gift.',
      },
      {
        label: 'sich ärgern über + Akkusativ',
        example: 'Er ärgert sich über den Lärm.',
        translation: 'He is annoyed about the noise.',
      },
    ],
  },
  {
    preposition: 'MIT',
    accent: {
      text: 'text-emerald-800',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      soft: 'bg-emerald-100',
      badge: 'bg-emerald-200 text-emerald-800',
    },
    description:
      "The preposition 'mit' takes the dative case, and in verb + preposition combinations it often expresses togetherness, interaction, or involvement. Many common everyday verbs use this pattern.",
    notes: [
      'Common patterns include speaking, meeting, beginning, and dealing with something: sprechen mit, sich treffen mit, beginnen mit, sich beschäftigen mit.',
      'This group is very useful in daily communication because many of its verbs are conversational and practical.',
    ],
    examples: [
      {
        label: 'sprechen mit + Dativ',
        example: 'Ich spreche mit meiner Lehrerin.',
        translation: 'I am speaking with my teacher.',
      },
      {
        label: 'beginnen mit + Dativ',
        example: 'Wir beginnen mit der Übung.',
        translation: 'We begin with the exercise.',
      },
      {
        label: 'sich treffen mit + Dativ',
        example: 'Ich treffe mich mit meinen Freunden.',
        translation: 'I am meeting with my friends.',
      },
      {
        label: 'sich beschäftigen mit + Dativ',
        example: 'Er beschäftigt sich mit Geschichte.',
        translation: 'He is occupied with history.',
      },
      {
        label: 'rechnen mit + Dativ',
        example: 'Wir rechnen mit deiner Hilfe.',
        translation: 'We are counting on your help.',
      },
    ],
  },
  {
    preposition: 'VON',
    accent: {
      text: 'text-amber-800',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      soft: 'bg-amber-100',
      badge: 'bg-amber-200 text-amber-800',
    },
    description:
      "The preposition 'von' takes the dative case. In verb + preposition combinations, it often expresses origin, source, subject matter, or dependence.",
    notes: [
      'Frequent verbs include träumen von, abhängen von, erzählen von, berichten von.',
      'This group often helps learners express opinions, sources, and personal topics.',
    ],
    examples: [
      {
        label: 'träumen von + Dativ',
        example: 'Ich träume von einem Haus am Meer.',
        translation: 'I dream of a house by the sea.',
      },
      {
        label: 'abhängen von + Dativ',
        example: 'Alles hängt vom Wetter ab.',
        translation: 'Everything depends on the weather.',
      },
      {
        label: 'erzählen von + Dativ',
        example: 'Er erzählt von seiner Reise.',
        translation: 'He tells about his trip.',
      },
      {
        label: 'berichten von + Dativ',
        example: 'Die Zeitung berichtet von dem Unfall.',
        translation: 'The newspaper reports on the accident.',
      },
      {
        label: 'halten von + Dativ',
        example: 'Was hältst du von diesem Film?',
        translation: 'What do you think of this film?',
      },
    ],
  },
  {
    preposition: 'ZU',
    accent: {
      text: 'text-teal-800',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      soft: 'bg-teal-100',
      badge: 'bg-teal-200 text-teal-800',
    },
    description:
      "The preposition 'zu' takes the dative case. In verb + preposition combinations, it often points toward relation, belonging, result, invitation, or contribution.",
    notes: [
      'Common examples are einladen zu, gehören zu, gratulieren zu, beitragen zu.',
      'This group is useful for invitations, congratulations, belonging, and formal German.',
    ],
    examples: [
      {
        label: 'einladen zu + Dativ',
        example: 'Sie lädt mich zu ihrer Party ein.',
        translation: 'She invites me to her party.',
      },
      {
        label: 'gehören zu + Dativ',
        example: 'Das Buch gehört zu diesem Kurs.',
        translation: 'The book belongs to this course.',
      },
      {
        label: 'gratulieren zu + Dativ',
        example: 'Ich gratuliere dir zu deinem Erfolg.',
        translation: 'I congratulate you on your success.',
      },
      {
        label: 'beitragen zu + Dativ',
        example: 'Sport trägt zu einem gesunden Leben bei.',
        translation: 'Sport contributes to a healthy life.',
      },
      {
        label: 'führen zu + Dativ',
        example: 'Das führt zu einem Missverständnis.',
        translation: 'That leads to a misunderstanding.',
      },
    ],
  },
  {
    preposition: 'UM',
    accent: {
      text: 'text-fuchsia-800',
      bg: 'bg-fuchsia-50',
      border: 'border-fuchsia-200',
      soft: 'bg-fuchsia-100',
      badge: 'bg-fuchsia-200 text-fuchsia-800',
    },
    description:
      "The preposition 'um' takes the accusative case. In verb + preposition combinations, it often expresses purpose, request, competition, application, or the main topic something is about.",
    notes: [
      'Common patterns include bitten um, sich bewerben um, kämpfen um, sich kümmern um.',
      "The expression 'es geht um' is especially common when introducing the main topic of a text or conversation.",
    ],
    examples: [
      {
        label: 'bitten um + Akkusativ',
        example: 'Er bittet um Hilfe.',
        translation: 'He asks for help.',
      },
      {
        label: 'sich bewerben um + Akkusativ',
        example: 'Sie bewirbt sich um eine Stelle.',
        translation: 'She is applying for a job.',
      },
      {
        label: 'sich kümmern um + Akkusativ',
        example: 'Er kümmert sich um seinen Hund.',
        translation: 'He takes care of his dog.',
      },
      {
        label: 'kämpfen um + Akkusativ',
        example: 'Die Mannschaft kämpft um den Sieg.',
        translation: 'The team is fighting for victory.',
      },
      {
        label: 'es geht um + Akkusativ',
        example: 'Im Text geht es um Umweltprobleme.',
        translation: 'The text is about environmental problems.',
      },
    ],
  },
  {
    preposition: 'FÜR',
    accent: {
      text: 'text-indigo-800',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      soft: 'bg-indigo-100',
      badge: 'bg-indigo-200 text-indigo-800',
    },
    description:
      "The preposition 'für' takes the accusative case. In verb + preposition combinations, it often expresses support, purpose, gratitude, interest, or decision in favor of something.",
    notes: [
      'Common combinations include danken für, sich interessieren für, sich entscheiden für, sich engagieren für.',
      'This group is common in both daily German and exam-level speaking tasks because it often expresses preference and personal engagement.',
    ],
    examples: [
      {
        label: 'danken für + Akkusativ',
        example: 'Ich danke dir für deine Hilfe.',
        translation: 'I thank you for your help.',
      },
      {
        label: 'sich interessieren für + Akkusativ',
        example: 'Er interessiert sich für Computertechnik.',
        translation: 'He is interested in computer technology.',
      },
      {
        label: 'sich entscheiden für + Akkusativ',
        example: 'Ich entscheide mich für den blauen Mantel.',
        translation: 'I decide on the blue coat.',
      },
      {
        label: 'sich engagieren für + Akkusativ',
        example: 'Sie engagiert sich für soziale Projekte.',
        translation: 'She is committed to social projects.',
      },
      {
        label: 'sorgen für + Akkusativ',
        example: 'Die Eltern sorgen für ihre Kinder.',
        translation: 'The parents care for their children.',
      },
    ],
  },
];
