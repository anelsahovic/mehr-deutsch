import { ChevronDown } from 'lucide-react';
import type { VerbWithPreposition } from '../types';

function MobileVerbCard({ item }: { item: VerbWithPreposition }) {
  return (
    <details className="group rounded-lg border border-black/5 bg-white shadow-sm md:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4">
        <div className="min-w-0">
          <p className="text-base font-semibold text-gray-900 break-words">
            {item.verb} {item.preposition}
          </p>
          <p className="mt-1 text-sm text-gray-600">{item.translation}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 capitalize">
              {item.case}
            </span>

            <span
              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                item.reflexive
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {item.reflexive ? 'Reflexive' : 'Non-reflexive'}
            </span>
          </div>
        </div>

        <ChevronDown className="size-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="border-t border-black/5 bg-gray-50/70 px-4 py-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="rounded-lg border border-black/5 bg-white p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Pattern
            </p>
            <p className="text-sm text-gray-800">
              <span className="font-semibold">{item.verb}</span>{' '}
              <span className="font-semibold">{item.preposition}</span> +{' '}
              <span className="capitalize">{item.case}</span>
            </p>
          </div>

          <div className="rounded-lg border border-black/5 bg-white p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Example sentence
            </p>
            <p className="text-sm italic text-gray-900">{item.example}</p>

            {item.exampleTranslation && (
              <p className="mt-2 text-sm text-gray-600">
                {item.exampleTranslation}
              </p>
            )}
          </div>
        </div>
      </div>
    </details>
  );
}

function DesktopVerbTable({
  items,
  tableHeadClass,
}: {
  items: VerbWithPreposition[];
  tableHeadClass: string;
}) {
  return (
    <div className="hidden md:block overflow-x-auto rounded-lg border border-black/5 bg-white">
      <table className="min-w-full text-sm">
        <thead className={tableHeadClass}>
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Verb</th>
            <th className="px-4 py-3 text-left font-semibold">Preposition</th>
            <th className="px-4 py-3 text-left font-semibold">Case</th>
            <th className="px-4 py-3 text-left font-semibold">Meaning</th>
            <th className="px-4 py-3 text-left font-semibold">Example</th>
          </tr>
        </thead>

        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}
              >
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                  {item.verb}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {item.preposition}
                </td>
                <td className="px-4 py-3 text-gray-700 capitalize whitespace-nowrap">
                  {item.case}
                </td>
                <td className="px-4 py-3 text-gray-700">{item.translation}</td>
                <td className="px-4 py-3 text-gray-700">{item.example}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                No verbs added for this level yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function LevelGroupedVerbsTable({
  verbs,
}: {
  verbs: VerbWithPreposition[];
}) {
  const levels: Array<'A1' | 'A2' | 'B1' | 'B2'> = ['A1', 'A2', 'B1', 'B2'];

  const levelStyles = {
    A1: {
      wrapper: 'bg-emerald-50 border-emerald-200',
      badge: 'bg-emerald-200 text-emerald-800',
      title: 'text-emerald-800',
      tableHead: 'bg-emerald-100 text-emerald-900',
    },
    A2: {
      wrapper: 'bg-sky-50 border-sky-200',
      badge: 'bg-sky-200 text-sky-800',
      title: 'text-sky-800',
      tableHead: 'bg-sky-100 text-sky-900',
    },
    B1: {
      wrapper: 'bg-violet-50 border-violet-200',
      badge: 'bg-violet-200 text-violet-800',
      title: 'text-violet-800',
      tableHead: 'bg-violet-100 text-violet-900',
    },
    B2: {
      wrapper: 'bg-amber-50 border-amber-200',
      badge: 'bg-amber-200 text-amber-800',
      title: 'text-amber-800',
      tableHead: 'bg-amber-100 text-amber-900',
    },
  };

  const grouped = levels.map((level) => ({
    level,
    items: verbs
      .filter((verb) => verb.level === level)
      .sort((a, b) =>
        `${a.verb} ${a.preposition}`.localeCompare(
          `${b.verb} ${b.preposition}`,
        ),
      ),
  }));

  return (
    <section className="flex flex-col gap-6 bg-white rounded-xl p-6 md:p-8 shadow">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Verbs by Level
        </h2>
        <p className="text-base text-gray-600">
          This overview groups important verbs with prepositions by level. On
          mobile, verbs open as compact cards. On larger screens, they stay in a
          table for easier scanning.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {grouped.map(({ level, items }) => {
          const style = levelStyles[level];

          return (
            <details
              key={level}
              className={`group rounded-xl border ${style.wrapper} shadow-sm`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-4 py-1.5 text-sm font-bold ${style.badge}`}
                  >
                    {level}
                  </span>

                  <h3
                    className={`text-xl md:text-2xl font-bold ${style.title}`}
                  >
                    {level} Verbs
                  </h3>

                  <span className="text-sm text-gray-500">
                    {items.length} items
                  </span>
                </div>

                <ChevronDown className="size-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="border-t border-black/5 px-5 py-5 md:px-6 md:py-6">
                {items.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 gap-3 md:hidden">
                      {items.map((item) => (
                        <MobileVerbCard key={item.id} item={item} />
                      ))}
                    </div>

                    <DesktopVerbTable
                      items={items}
                      tableHeadClass={style.tableHead}
                    />
                  </>
                ) : (
                  <div className="rounded-lg bg-white px-4 py-6 text-center text-gray-500 border border-black/5">
                    No verbs added for this level yet.
                  </div>
                )}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
