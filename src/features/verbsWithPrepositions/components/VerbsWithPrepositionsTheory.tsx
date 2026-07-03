// VerbsWithPrepositionsTheory.tsx

import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { Info, BookOpen, ChevronDown } from 'lucide-react';
import { LevelGroupedVerbsTable } from './verbsWithPrepositionsTable';
import { verbsWithPrepositions } from '../data/verbs';
import type { PrepositionGroup, VerbExample } from '../types';
import { prepositionGroups } from '../data/constants';

function ExampleDropdown({
  title,
  examples,
  accent,
}: {
  title: string;
  examples: VerbExample[];
  accent: PrepositionGroup['accent'];
}) {
  return (
    <details className="group rounded-lg border border-black/5 bg-white shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">
            Click to view example verbs and sentences
          </p>
        </div>
        <ChevronDown className="size-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="border-t border-gray-100 px-4 py-4">
        <div className="space-y-3">
          {examples.map((item) => (
            <div key={item.label} className={`rounded-lg ${accent.soft} p-4`}>
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${accent.badge}`}
              >
                {item.label}
              </span>
              <p className="mt-3 text-sm text-gray-800 italic">
                {item.example}
              </p>
              <p className="mt-1 text-sm text-gray-600">{item.translation}</p>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}

function PrepositionIsland({ group }: { group: PrepositionGroup }) {
  return (
    <details
      className={`group rounded-xl border ${group.accent.border} ${group.accent.bg} shadow-sm`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
        <div className="flex items-center gap-3">
          <div
            className={`rounded-full px-4 py-2 text-sm md:text-base font-bold tracking-wide ${group.accent.badge}`}
          >
            {group.preposition}
          </div>

          <h3 className={`text-xl md:text-2xl font-bold ${group.accent.text}`}>
            Preposition {group.preposition}
          </h3>
        </div>

        <ChevronDown className="size-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="border-t border-black/5 px-5 py-5 md:px-6 md:py-6">
        <div className="flex flex-col gap-5">
          <p className="text-base text-gray-700">{group.description}</p>

          <div className="space-y-2">
            {group.notes.map((note, index) => (
              <div
                key={index}
                className="rounded-lg border border-black/5 bg-white/70 px-4 py-3"
              >
                <p className="text-sm text-gray-700">{note}</p>
              </div>
            ))}
          </div>

          <ExampleDropdown
            title={`Common verbs with ${group.preposition}`}
            examples={group.examples}
            accent={group.accent}
          />
        </div>
      </div>
    </details>
  );
}

export default function VerbsWithPrepositionsTheory() {
  return (
    <>
      <section className="flex flex-col gap-5 bg-white rounded-xl p-6 md:p-8 shadow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Verbs with Prepositions: Theory
        </h2>

        <p className="text-base text-gray-600">
          In German, many verbs are used together with a fixed preposition. A
          useful way to study them is by preposition groups such as{' '}
          <span className="font-semibold text-rose-700">an</span>,
          <span className="font-semibold text-sky-700"> auf</span>,
          <span className="font-semibold text-blue-700"> über</span>,
          <span className="font-semibold text-fuchsia-700"> zu</span>,
          <span className="font-semibold text-indigo-700"> um</span>,
          <span className="font-semibold text-lime-700"> für</span>,
          <span className="font-semibold text-emerald-700"> mit</span>, or
          <span className="font-semibold text-amber-700"> von</span>, because
          this helps learners see recurring patterns more clearly.
        </p>

        <div className="bg-gradient-to-br from-sky-100 via-indigo-50 to-emerald-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-sky-800 mb-3 flex items-center gap-2">
            <BookOpen className="size-5" />
            How to Learn Them
          </h3>

          <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
            <li>
              Learn the verb, the preposition, and the case together as one
              unit.
            </li>
            <li>
              Grouping by preposition makes repeated patterns easier to notice.
            </li>
            <li>
              Some prepositions always go with one case, while some two-way
              prepositions can appear with more than one case in fixed
              combinations.
            </li>
            <li>
              Practice with full sentences, not isolated forms, because direct
              translation from English is often misleading.
            </li>
          </ul>
        </div>

        <div className="mt-2 bg-indigo-50 border-l-4 border-indigo-400 px-4 py-3 rounded">
          <p className="text-indigo-800 font-bold mb-1 flex items-center gap-2">
            <MdOutlineTipsAndUpdates className="size-6" />
            <span>Tip</span>
          </p>
          <p className="text-indigo-700">
            Try to memorize combinations like{' '}
            <span className="font-semibold">denken an + Akkusativ</span> and{' '}
            <span className="font-semibold">beginnen mit + Dativ</span> as
            complete patterns. This makes later practice much easier.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4">
        {prepositionGroups.map((group) => (
          <PrepositionIsland key={group.preposition} group={group} />
        ))}
      </div>

      <LevelGroupedVerbsTable verbs={verbsWithPrepositions} />

      <section className="flex flex-col gap-4 bg-white rounded-xl p-6 md:p-8 shadow">
        <h3 className="text-2xl md:text-3xl font-bold text-sky-800 flex items-center gap-2">
          <Info className="size-5" />
          Practice Advice
        </h3>

        <p className="text-base text-gray-600">
          Preposition-based practice works well because it trains recognition of
          recurring structures, not just isolated verbs. This is especially
          useful for learners who confuse German patterns with English ones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg bg-sky-50 border border-sky-100 p-4">
            <h4 className="font-semibold text-sky-800 mb-2">
              Group by preposition
            </h4>
            <p className="text-sm text-gray-700">
              Study all <span className="italic">an</span> verbs together, then{' '}
              <span className="italic">auf</span>, then{' '}
              <span className="italic">mit</span>.
            </p>
          </div>

          <div className="rounded-lg bg-sky-50 border border-sky-100 p-4">
            <h4 className="font-semibold text-sky-800 mb-2">Notice the case</h4>
            <p className="text-sm text-gray-700">
              Always memorize the case with the pattern, for example{' '}
              <span className="italic">für + Akk</span> or{' '}
              <span className="italic">mit + Dat</span>.
            </p>
          </div>

          <div className="rounded-lg bg-sky-50 border border-sky-100 p-4">
            <h4 className="font-semibold text-sky-800 mb-2">
              Practice with examples
            </h4>
            <p className="text-sm text-gray-700">
              Full example sentences help learners remember meaning and
              structure together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
