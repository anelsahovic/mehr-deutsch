// GermanNounGendersTheory.tsx

import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { FaMars, FaNeuter, FaVenus } from 'react-icons/fa6';

import { Info } from 'lucide-react';
import type { GenderData } from '@/features/nounGenders/types/nounGenders.types';
import CollapsibleNounGenderDetails from './CollapsibleNounGenderDetails';
import {
  colorVariants,
  feminineNouns,
  masculineNouns,
  neuterNouns,
} from '../data/constants';

export default function NounGendersTheory() {
  const genders: GenderData[] = [
    {
      title: 'Masculine (der)',
      icon: FaMars,
      description:
        "Masculine nouns take the article 'der' in German. This gender includes most nouns referring to male people, many living things, and several common things or concepts. The grammatical gender often does not match natural gender for objects, so it must be learned along with the noun. The masculine article not only changes the form of 'the' but also affects adjective endings and pronouns throughout a sentence. For example: 'der Mann' (the man), 'der Tisch' (the table), 'der Hund' (the dog). Memorizing nouns with their article is key for mastering German grammar.",
      color: 'blue',
      data: masculineNouns,
    },
    {
      title: 'Feminine (die)',
      icon: FaVenus,
      description:
        "Feminine nouns in German use the article 'die.' This group contains most nouns describing female people, many animals, and a large number of objects and ideas. The gender may not always seem logical, so it’s important to always learn the article with each new word. The article 'die' influences adjective endings, pronouns, and word order in sentences. Examples include: 'die Frau' (the woman), 'die Katze' (the cat), 'die Tür' (the door). Remembering the correct gender from the start helps avoid confusion later.",
      color: 'rose',
      data: feminineNouns,
    },
    {
      title: 'Neuter (das)',
      icon: FaNeuter,
      description:
        "Neuter nouns use the article 'das' in German. Many words for young people and animals, as well as various objects, substances, and abstract ideas, are neuter. Sometimes gender feels random, so it's necessary to memorize the article with the noun. The use of 'das' affects adjectives and other grammar elements linked to the noun. Common examples include: 'das Kind' (the child), 'das Haus' (the house), 'das Mädchen' (the girl, due to the diminutive ending). Consistently pairing articles with nouns makes German easier to master.",
      color: 'green',
      data: neuterNouns,
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-5 bg-white rounded-xl p-6 md:p-8 shadow">
        <h2 className="text-2xl sm:text-3xl  md:text-4xl font-bold text-gray-900">
          German Noun Genders: Theory
        </h2>
        <p className="text-base text-gray-600">
          Every German noun belongs to one of three genders:{' '}
          <span className="font-semibold text-blue-700">der (masculine)</span>,{' '}
          <span className="font-semibold text-pink-600">die (feminine)</span>,
          or <span className="font-semibold text-teal-700">das (neuter)</span>.
          Gender determines the form of articles, adjective endings, and the
          agreement of pronouns, all of which are essential for proper sentence
          structure and meaning. While many noun genders follow logical
          patterns, there are also exceptions to be aware of. Understanding
          these patterns will significantly ease your learning process.{' '}
        </p>
        <div className="bg-gradient-to-br from-purple-200 via-purple-100 to-fuchsia-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            How to Recognize Gender
          </h3>
          <ul className="list-disc pl-5 text-gray-700 text-base mb-2">
            <li>
              {' '}
              Always learn nouns along with their definite article:{' '}
              <span className="font-semibold">der, die, das</span>. This anchors
              your understanding of the noun’s{' '}
            </li>{' '}
            <li>
              {' '}
              Pay attention to common noun endings and groups, as these usually
              indicate gender, although some exceptions exist.{' '}
            </li>{' '}
            <li>
              {' '}
              For people and animals, natural gender often determines
              grammatical gender, but endings and exceptions exist—e.g.,{' '}
              <span className="italic">das Mädchen</span> (the girl) is neuter
              because it is a diminutive form.{' '}
            </li>{' '}
            <li>
              {' '}
              Compound nouns take the gender of their final noun, so always
              identify the root word to deduce gender correctly, e.g.,{' '}
              <span className="italic">der Fahrplan</span> (schedule),{' '}
              <span className="italic">die Bushaltestelle</span> (bus stop).{' '}
            </li>{' '}
            <li>
              {' '}
              Remember that there are exceptions to almost every pattern;
              regular exposure and practice help internalize these.{' '}
            </li>{' '}
          </ul>
        </div>

        <div className="mt-4 bg-purple-50 border-l-4 border-purple-400 px-4 py-3 rounded">
          <p className="text-purple-800 font-bold mb-1 flex items-center gap-2">
            <MdOutlineTipsAndUpdates className="size-6" />
            <span>Tip</span>
          </p>
          <p className="text-purple-700">
            When building your vocabulary, make a habit of learning the noun
            along with its article (
            <span className="font-semibold">der, die, das</span>). Group nouns
            by characteristic endings or semantic categories such as
            professions, animals, or natural phenomena. This strategy makes
            recognizing and remembering genders more intuitive. Also, embrace
            exceptions as part of the learning journey—they often highlight the
            richness and history of the language.{' '}
          </p>
        </div>
      </section>

      {genders.map(({ title, icon: Icon, description, color, data }) => (
        <section
          key={title}
          className="flex flex-col gap-6 bg-white rounded-xl p-6 md:p-8 shadow"
        >
          <div className="flex items-center gap-2">
            <Icon
              className={`${colorVariants[color].text} size-5 sm:size-6 md:size-7`}
            />
            <h3
              className={`text-2xl  md:text-3xl font-bold ${colorVariants[color].text} `}
            >
              {title}
            </h3>
          </div>
          <p className="text-base text-gray-600">{description}</p>

          <div>
            <h4
              className={`flex items-center text-xl sm:text-2xl underline underline-offset-2 md:text-2xl font-semibold mb-4 ${colorVariants[color].text} `}
            >
              Noun Endings
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.endings.map(({ ending, examples, exceptions }, index) => (
                <CollapsibleNounGenderDetails
                  key={index}
                  name={ending}
                  examples={examples}
                  exceptions={exceptions}
                  color={color}
                />
              ))}
            </div>
          </div>

          <div>
            <h4
              className={`flex items-center text-xl sm:text-2xl underline underline-offset-2 md:text-2xl font-semibold mb-4 ${colorVariants[color].text} `}
            >
              Noun Groups
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.groups.map(({ group, examples, exceptions }, index) => (
                <CollapsibleNounGenderDetails
                  key={index}
                  name={group}
                  examples={examples}
                  exceptions={exceptions}
                  color={color}
                />
              ))}
            </div>
          </div>

          <div
            className={`mt-4 ${colorVariants[color].bg} border-l-4 ${colorVariants[color].border} px-4 py-3 rounded`}
          >
            <p
              className={`${colorVariants[color].text} font-bold mb-1 flex items-center gap-2`}
            >
              <Info className="size-5" />
              <span>Info</span>
            </p>
            <p className={`${colorVariants[color].text} text-sm`}>
              The symbol
              <span className="font-semibold"> "(!)" </span> indicates that the
              respective ending has numerous exceptions, so caution is advised
              when applying the rule.
            </p>
          </div>
        </section>
      ))}
    </>
  );
}
