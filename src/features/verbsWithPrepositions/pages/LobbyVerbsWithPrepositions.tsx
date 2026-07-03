import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';

export default function LobbyVerbsWithPrepositions() {
  const [difficulty, setDifficulty] = useState('all');
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/topics/verbs-with-prepositions/practice?level=${difficulty}`);
  };
  return (
    <div className="min-h-dvh w-full max-w-4xl mx-auto flex flex-col justify-between gap-6 p-6 py-10">
      <main className="flex-1 flex items-center">
        <section className="w-full rounded-3xl border border-black/5 bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-8 md:p-10">
              <div className="mb-8">
                <p className="mb-3 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
                  Verbs with prepositions
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                  Choose your difficulty
                </h1>

                <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
                  Pick the level you want to practice before starting. You can
                  focus on one CEFR level only or train with all verbs together
                  for a broader challenge.
                </p>
              </div>

              <div className="rounded-2xl border border-black/5 bg-gray-50 p-5 sm:p-6">
                <label
                  htmlFor="difficulty"
                  className="mb-3 block text-sm font-semibold text-gray-800"
                >
                  Select difficulty
                </label>

                <select
                  id="difficulty"
                  name="difficulty"
                  defaultValue="all"
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-base font-medium text-gray-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                >
                  <option value="a1">A1</option>
                  <option value="a2">A2</option>
                  <option value="b1">B1</option>
                  <option value="b2">B2</option>
                  <option value="all">All levels</option>
                </select>

                <p className="mt-3 text-sm text-gray-500">
                  Tip: Start with one level if you want focused repetition, then
                  switch to all levels when you want mixed practice.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleStart}
                    className="
                              inline-flex items-center gap-2 h-full
                              px-5 py-3.5 
                              bg-yellow-500 text-white font-semibold 
                              rounded-lg shadow-md 
                              active:scale-95
                              hover:font-bold hover:bg-amber-400
                              focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 
                              transition-all duration-300 
                              select-none cursor-pointer
                            "
                  >
                    <Play className="size-4" />
                    Start practice
                  </Button>

                  <NavLink
                    to="/topics/verbs-with-prepositions"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    Back to theory
                  </NavLink>
                </div>
              </div>
            </div>

            <aside className="border-t lg:border-t-0 lg:border-l border-black/5 bg-gradient-to-br from-indigo-50 via-white to-teal-50 p-6 sm:p-8 md:p-10 flex flex-col justify-between rounded-b-3xl sm:rounded-r-3xl">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  What you’ll practice
                </h2>

                <ul className="mt-4 space-y-3 text-sm sm:text-base text-gray-600">
                  <li className="rounded-xl bg-white/80 px-4 py-3 border border-black/5">
                    Fixed verb + preposition combinations.
                  </li>
                  <li className="rounded-xl bg-white/80 px-4 py-3 border border-black/5">
                    Whether the phrase takes accusative or dative.
                  </li>
                  <li className="rounded-xl bg-white/80 px-4 py-3 border border-black/5">
                    Faster recognition through focused level-based practice.
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-gray-900 px-5 py-4 text-gray-100 shadow-sm">
                <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
                  Recommended
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">
                  If you are unsure, begin with A1 or A2 and move up once you
                  can recognize the verb-preposition pair quickly without
                  translating.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
