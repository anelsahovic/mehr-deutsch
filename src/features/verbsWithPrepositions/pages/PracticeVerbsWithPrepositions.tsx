import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import {
  Check,
  Info,
  ArrowRight,
  Home,
  LucideLandmark,
  LucideRotateCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MdClose, MdTranslate } from 'react-icons/md';
import { Progress } from '@/components/ui/progress';
import { useEffect, useMemo, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { NavLink, useSearchParams } from 'react-router';
import type { VerbWithPreposition } from '../types';
import { verbsWithPrepositions } from '../data/verbs';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type AnswerStatus = 'idle' | 'correct' | 'partial' | 'wrong' | 'solved';

export default function PracticeVerbsWithPrepositions() {
  const [searchParams] = useSearchParams();
  const levelParam = searchParams.get('level')?.toUpperCase() ?? 'ALL';

  const verbs = useMemo(() => {
    if (levelParam === 'ALL') return verbsWithPrepositions;
    return verbsWithPrepositions.filter((verb) => verb.level === levelParam);
  }, [levelParam]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVerb, setCurrentVerb] = useState<VerbWithPreposition>(verbs[0]);
  const [selectedPreposition, setSelectedPreposition] = useState('');
  const [selectedCase, setSelectedCase] = useState('');
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('idle');
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [answerLocked, setAnswerLocked] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [openLevelCompletedDialog, setOpenLevelCompletedDialog] =
    useState(false);

  useEffect(() => {
    setCurrentVerb(verbs[currentIndex]);
    setSelectedPreposition('');
    setSelectedCase('');
    setAnswerStatus('idle');
    setEarnedPoints(0);
    setAnswerLocked(false);
  }, [currentIndex, verbs]);

  useEffect(() => {
    if (currentIndex === verbs.length - 1) {
      setOpenLevelCompletedDialog(true);
    }
  }, [currentIndex, verbs.length]);
  const totalItems = verbs.length;

  const prepositionOptions = useMemo(() => {
    return Array.from(new Set(verbs.map((v) => v.preposition))).sort((a, b) =>
      a.localeCompare(b),
    );
  }, [verbs]);

  const caseOptions = useMemo(() => {
    return Array.from(new Set(verbs.map((v) => v.case))).sort((a, b) =>
      a.localeCompare(b),
    );
  }, [verbs]);

  const isPrepositionCorrect =
    selectedPreposition.trim().toLowerCase() ===
    currentVerb?.preposition.trim().toLowerCase();

  const isCaseCorrect =
    selectedCase.trim().toLowerCase() ===
    currentVerb?.case.trim().toLowerCase();

  const getPrepositionTone = () => {
    if (!answerLocked) return 'text-gray-900';
    if (answerStatus === 'solved') return 'text-gray-500';
    return isPrepositionCorrect ? 'text-green-700' : 'text-red-600';
  };

  const getCaseTone = () => {
    if (!answerLocked) return 'text-gray-900';
    if (answerStatus === 'solved') return 'text-gray-500';
    return isCaseCorrect ? 'text-green-700' : 'text-red-600';
  };

  const prepositionTone = getPrepositionTone();
  const caseTone = getCaseTone();

  const helperTone =
    answerLocked && answerStatus === 'solved'
      ? 'text-gray-400'
      : 'text-muted-foreground';

  const statusMessageStyles: Record<AnswerStatus, string> = {
    idle: 'text-gray-500',
    correct: 'text-green-700',
    partial: 'text-amber-700',
    wrong: 'text-red-700',
    solved: 'text-gray-500',
  };

  const handleCheckAnswer = () => {
    if (!currentVerb || answerLocked || !selectedPreposition || !selectedCase)
      return;

    let points = 0;

    if (isPrepositionCorrect && !isCaseCorrect) points = 1;
    if (!isPrepositionCorrect && isCaseCorrect) points = 1;
    if (isPrepositionCorrect && isCaseCorrect) points = 2;

    setEarnedPoints(points);
    setTotalPoints((prev) => prev + points);
    setAnswerLocked(true);

    if (points === 2) {
      setAnswerStatus('correct');
      return;
    }

    if (points === 1) {
      setAnswerStatus('partial');
      return;
    }

    setAnswerStatus('wrong');
  };

  const handleSolve = () => {
    if (!currentVerb || answerLocked) return;

    setSelectedPreposition(currentVerb.preposition);
    setSelectedCase(currentVerb.case);
    setEarnedPoints(0);
    setAnswerStatus('solved');
    setAnswerLocked(true);
  };

  const handleNext = () => {
    // if (!answerLocked) return;
    if (currentIndex >= totalItems - 1) return;

    setCurrentIndex((prev) => prev + 1);
  };

  const handleReload = () => {
    setTotalPoints(0);
    setEarnedPoints(0);
    setCurrentIndex(0);
    setAnswerLocked(false);
    setAnswerStatus('idle');
    setOpenLevelCompletedDialog(false);
  };

  if (!currentVerb) {
    return (
      <div className="min-h-dvh w-full max-w-3xl mx-auto flex items-center justify-center p-6">
        <div className="rounded-2xl border border-black/5 bg-white px-6 py-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">No verbs found</h1>
          <p className="mt-2 text-gray-600">
            There are no practice items for this level yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh w-full max-w-3xl mx-auto flex flex-col justify-between gap-6 px-4 py-6 sm:px-6 sm:py-8">
      {/* Level completed alert dialog */}
      <AlertDialog
        open={openLevelCompletedDialog}
        onOpenChange={setOpenLevelCompletedDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader className="relative flex flex-col justify-center items-center gap-4 text-center">
            <AlertDialogTitle className="p-0">
              <img
                src="/images/assets/level_completed_badge.webp"
                className="object-contain w-44 sm:w-48 md:w-52 absolute top-0 -translate-y-[97px] sm:-translate-y-[105px] md:-translate-y-[110px] left-1/2 -translate-x-1/2"
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base sm:text-lg md:text-xl py-4 text-center">
              <p> Great job! You’ve successfully completed </p>
              <span className="font-semibold">{levelParam} Level Verbs </span>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="flex flex-col sm:flex-row justify-center gap-5 w-full text-center">
            <div className="sm:w-52 flex flex-col items-center bg-green-100 text-green-800 px-5 py-3 rounded-lg shadow-sm">
              <span className="text-sm uppercase tracking-wider font-semibold text-green-600">
                Earned Points
              </span>
              <span className="text-2xl font-bold">{totalPoints}</span>
            </div>
          </div>

          <AlertDialogFooter className="flex flex-row justify-center items-center sm:items-center sm:justify-center gap-6 sm:gap-8 py-4">
            {/* Go Home Button */}
            <NavLink
              to="/topics"
              className="flex items-center justify-center size-14 sm:size-16 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 text-gray-600 shadow-md hover:shadow-lg hover:scale-105 hover:from-gray-200 hover:to-gray-300 active:scale-95 focus:outline-none  focus:ring-gray-400 transition-all duration-300 cursor-pointer"
              aria-label="Go To Topics page"
            >
              <Home className="size-6" />
            </NavLink>

            {/* Go to lobby to choose level and try again */}
            <NavLink
              to="/topics/verbs-with-prepositions/lobby"
              className="flex items-center justify-center size-14 sm:size-16 rounded-lg bg-gradient-to-br from-teal-400 to-blue-400  border-blue-500 text-blue-900 shadow-md hover:shadow-lg hover:scale-105 hover:from-teal-400 hover:to-blue-500 active:scale-95 focus:outline-none  focus:ring-blue-400 transition-all duration-300 cursor-pointer"
              aria-label="Go to Lobby page"
            >
              <LucideLandmark className="size-6" />
            </NavLink>

            {/* Try again Button */}
            <AlertDialogAction asChild>
              <Button
                onClick={handleReload}
                className="flex items-center justify-center size-14 sm:size-16 rounded-lg bg-gradient-to-br from-yellow-300 to-amber-500 text-yellow-900 shadow-md hover:shadow-lg hover:scale-105 hover:from-yellow-300 hover:to-amber-600 active:scale-95 focus:outline-none focus:ring-yellow-400 transition-all duration-300 cursor-pointer"
                aria-label="Reload Practicing"
              >
                <LucideRotateCw className="size-6" />
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <header className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <NavLink
            to="/topics/verbs-with-prepositions"
            className="w-11 flex  justify-start "
            aria-label="Close practice and Go back to verbs with prepositions"
          >
            <MdClose className="size-6 text-gray-700 hover:text-red-500 transition-colors duration-300" />
          </NavLink>

          <div className="text-sm font-medium text-gray-500">
            {currentIndex + 1} / {totalItems}
          </div>
        </div>

        <Progress value={((currentIndex + 1) / totalItems) * 100} />

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaStar className="text-yellow-600" />

            {levelParam === 'ALL' ? (
              <p>
                Verb Level:{' '}
                <span className="ml-1 font-bold">{currentVerb.level}</span>
              </p>
            ) : (
              <p>
                Chosen Level:{' '}
                <span className="font-semibold">{levelParam}</span>
              </p>
            )}
          </div>

          <div className="rounded-full px-3 py-1 text-sm font-medium text-gray-700">
            {totalPoints} pts
          </div>
        </div>
      </header>

      {/* main - verb and selection */}
      <section className="w-full h-full rounded-3xl  p-6 ">
        <div className="w-full max-w-2xl flex flex-col items-center gap-10">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-5">
            <div className="flex flex-col items-center">
              <div className="flex h-[4.5rem] sm:h-[5.25rem] items-center">
                <h1
                  className={`text-4xl sm:text-5xl font-extrabold tracking-tight leading-none transition-colors ${earnedPoints === 2 ? prepositionTone : earnedPoints === 0 && answerStatus !== 'idle' && answerStatus !== 'solved' ? 'text-red-500' : ''}`}
                >
                  {currentVerb.verb}
                </h1>
              </div>
              <span className={`mt-2 text-xs sm:text-sm ${helperTone}`}>
                Verb
              </span>
            </div>

            <div className="flex flex-col items-center gap-0">
              <div className="flex h-[4.5rem] sm:h-[5.25rem] items-center">
                <Select
                  value={selectedPreposition}
                  onValueChange={setSelectedPreposition}
                  disabled={answerLocked}
                >
                  <SelectTrigger
                    className={`h-auto min-h-0 w-auto min-w-[112px] sm:min-w-[132px] border-0 rounded-none bg-transparent px-0 py-0 text-4xl sm:text-5xl font-extrabold tracking-tight leading-none shadow-none ring-0 outline-none justify-center gap-2 transition-colors [&>svg]:size-5 [&>svg]:opacity-50 ${prepositionTone} data-[placeholder]:text-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0 data-[placeholder]:border-b
      data-[placeholder]:border-gray-400`}
                  >
                    <SelectValue placeholder="?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {prepositionOptions.map((prep) => (
                        <SelectItem key={prep} value={prep}>
                          {prep}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <span className={`mt-2 text-xs sm:text-sm ${helperTone}`}>
                Preposition
              </span>
            </div>
          </div>

          <div className="w-full max-w-sm flex flex-col items-center">
            <Select
              value={selectedCase}
              onValueChange={setSelectedCase}
              disabled={answerLocked}
            >
              <SelectTrigger
                className={`h-auto min-h-0 w-auto min-w-[112px] sm:min-w-[132px] border-0  bg-transparent px-0 py-0 text-xl sm:text-2xl font-extrabold tracking-tight leading-none shadow-none ring-0 outline-none justify-center gap-2 rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0 ${caseTone} data-[placeholder]:border-b data-[placeholder]:border-gray-400 capitalize`}
              >
                <SelectValue placeholder="Accusative/Dative" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {caseOptions.map((itemCase) => (
                    <SelectItem
                      key={itemCase}
                      value={itemCase}
                      className="capitalize"
                    >
                      {itemCase}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <span className={`mt-2 text-xs sm:text-sm ${helperTone}`}>
              Case
            </span>
          </div>
        </div>
      </section>

      {/* answer status - text  */}
      <section className="flex flex-col items-center">
        <div className="min-h-14">
          {answerStatus === 'idle' && (
            <p className="text-sm sm:text-base text-gray-500">
              Choose the correct preposition and case.
            </p>
          )}

          {answerStatus === 'correct' && (
            <div className="flex flex-col items-center gap-2 text-center">
              <p
                className={`text-base font-semibold ${statusMessageStyles.correct}`}
              >
                CORRECT!
              </p>
              <span className="font-semibold text-green-500">
                You earned 2 points.
              </span>
            </div>
          )}

          {answerStatus === 'partial' &&
            isPrepositionCorrect &&
            !isCaseCorrect && (
              <div className="flex flex-col items-center gap-2 text-center">
                <p
                  className={`text-base font-semibold ${statusMessageStyles.partial}`}
                >
                  ALMOST!
                </p>

                <p
                  className={`text-sm sm:text-base font-medium text-amber-500`}
                >
                  You earned {earnedPoints} point.
                </p>
              </div>
            )}

          {answerStatus === 'partial' &&
            !isPrepositionCorrect &&
            isCaseCorrect && (
              <div className="flex flex-col items-center gap-2 text-center">
                <p
                  className={`text-base font-semibold ${statusMessageStyles.partial}`}
                >
                  ALMOST!
                </p>

                <p
                  className={`text-sm sm:text-base font-medium text-amber-500`}
                >
                  You earned {earnedPoints} point.
                </p>
              </div>
            )}

          {answerStatus === 'wrong' && (
            <div className="flex flex-col items-center gap-2 text-center">
              <p
                className={`text-base font-semibold ${statusMessageStyles.wrong}`}
              >
                WRONG!
              </p>

              <p className={`text-sm sm:text-base font-medium text-red-500`}>
                You earned 0 points.
              </p>
            </div>
          )}

          {answerStatus === 'solved' && (
            <div className="flex flex-col items-center gap-2 text-center">
              <p className={`text-base font-semibold text-blue-700`}>SOLVED!</p>
              <p className={`text-sm sm:text-base font-medium text-blue-500`}>
                You earned 0 points.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* answer status 2 - detailed */}
      <section className="flex flex-col items-center">
        <div className="min-h-14">
          {answerStatus === 'correct' && (
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
                Both answers are correct
              </p>

              <p className="text-base sm:text-lg text-gray-700">
                <span className="text-gray-900">{currentVerb.verb}</span>{' '}
                <span className="text-gray-900">{currentVerb.preposition}</span>{' '}
                + <span className=" text-gray-900">{currentVerb.case}</span>
              </p>
            </div>
          )}

          {answerStatus === 'partial' &&
            isPrepositionCorrect &&
            !isCaseCorrect && (
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
                  Correct answer
                </p>

                <p className="text-base sm:text-lg text-gray-700">
                  <span className="text-gray-900">{currentVerb.verb}</span>{' '}
                  <span className="text-gray-900">
                    {currentVerb.preposition}
                  </span>{' '}
                  +{' '}
                  <span className="font-semibold italic text-gray-900">
                    {currentVerb.case}
                  </span>
                </p>
              </div>
            )}

          {answerStatus === 'partial' &&
            !isPrepositionCorrect &&
            isCaseCorrect && (
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
                  Correct answer
                </p>

                <p className="text-base sm:text-lg text-gray-700">
                  <span className="text-gray-900">{currentVerb.verb}</span>{' '}
                  <span className="font-semibold italic text-gray-900">
                    {currentVerb.preposition}
                  </span>{' '}
                  + <span className="text-gray-900">{currentVerb.case}</span>
                </p>
              </div>
            )}

          {answerStatus === 'wrong' && (
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
                Correct answer
              </p>

              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold text-gray-900">
                  {currentVerb.verb}
                </span>{' '}
                <span className="font-semibold text-gray-900">
                  {currentVerb.preposition}
                </span>{' '}
                +{' '}
                <span className="font-semibold text-gray-900">
                  {currentVerb.case}
                </span>
              </p>
            </div>
          )}

          {answerStatus === 'solved' && (
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
                Correct answer
              </p>

              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold text-gray-900">
                  {currentVerb.verb}
                </span>{' '}
                <span className="font-semibold text-gray-900">
                  {currentVerb.preposition}
                </span>{' '}
                +{' '}
                <span className="font-semibold text-gray-900">
                  {currentVerb.case}
                </span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* buttons and info */}
      <footer className="flex flex-col gap-6 ">
        {/* buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={handleSolve}
            disabled={answerLocked}
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-400"
          >
            Solve
          </Button>

          <Button
            size="lg"
            onClick={handleCheckAnswer}
            disabled={answerLocked || !selectedPreposition || !selectedCase}
            className="bg-teal-700 hover:bg-teal-800"
          >
            <Check className="size-4" />
            Check
          </Button>

          <Button
            size="lg"
            onClick={handleNext}
            disabled={currentIndex >= totalItems - 1}
            className="bg-gray-900 hover:bg-black"
          >
            Next
            <ArrowRight className="size-4" />
          </Button>
        </div>

        {/* translation and rules */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {currentVerb.translation && (
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-600 transition hover:underline underline-offset-4 duration-300 cursor-pointer"
                  aria-label="Show translation"
                >
                  <MdTranslate className="size-4" />
                  Translation
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-fit max-w-xs">
                {currentVerb.translation}
              </PopoverContent>
            </Popover>
          )}

          <Popover>
            <PopoverTrigger asChild>
              <button
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:underline underline-offset-4 duration-300 cursor-pointer"
                aria-label="Show practice help"
              >
                <Info className="size-4" />
                How scoring works
              </button>
            </PopoverTrigger>
            <PopoverContent className="max-w-xs">
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  Correct preposition only:{' '}
                  <span className="font-semibold">1 point</span>
                </p>
                <p>
                  Correct case only:{' '}
                  <span className="font-semibold">1 point</span>
                </p>
                <p>
                  Correct preposition and case:{' '}
                  <span className="font-semibold">2 points</span>
                </p>
                <p>
                  Solve reveals the answer and gives{' '}
                  <span className="font-semibold">0 points</span>
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </footer>
    </div>
  );
}
