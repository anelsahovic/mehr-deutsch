import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Check, Home, Info, List, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MdClose } from 'react-icons/md';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';
import type { Gender, Noun } from '../types/nounGenders.types';
import { allNouns } from '../data/nouns';
import { FaStar } from 'react-icons/fa6';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { NavLink } from 'react-router';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GenderButton from '../components/GenderButton';

export default function PracticeNounGenders() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNoun, setCurrentNoun] = useState<Noun>(allNouns[currentIndex]);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [totalCorrectAnswersCount, setTotalCorrectAnswersCount] = useState(0);
  const [correctAnswersList, setCorrectAnswersList] = useState<Noun[]>([]);
  const [falseAnswersList, setFalseAnswersList] = useState<Noun[]>([]);
  const [progressStart, setProgressStart] = useState(1);
  const [openLevelCompletedDialog, setOpenLevelCompletedDialog] =
    useState(false);
  const levelsBreakPoints = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250];

  useEffect(() => {
    // change noun when index changes (when user gets correct answer)
    setCurrentNoun(allNouns[currentIndex]);

    // check if the level is completed and open alert to display stats
    if (levelsBreakPoints.includes(currentIndex)) {
      setOpenLevelCompletedDialog(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleContinueToNextLevel = () => {
    setCurrentLevel((prev) => prev + 1);
    setCorrectAnswersCount(0);
    setProgressStart(1);
  };

  const handleCheckAnswer = (inputGender: string) => {
    if (currentNoun.gender === inputGender) {
      setCorrectAnswersCount((prev) => prev + 1);
      setTotalCorrectAnswersCount((prev) => prev + 1);
      setCorrectAnswersList((prev) => [...prev, currentNoun]);
    } else {
      setFalseAnswersList((prev) => [...prev, currentNoun]);
    }
    setCurrentIndex((prev) => prev + 1);
    setProgressStart((prev) => prev + 1);
  };

  return (
    <div className="min-h-dvh w-full max-w-4xl mx-auto flex flex-col justify-between gap-6 p-6 py-10">
      {/* Dialog when completed level */}
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
            <AlertDialogDescription className="text-base sm:text-lg md:text-xl py-4">
              Great job! You’ve successfully completed{' '}
              <span className="font-semibold">Level {currentLevel} </span>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="flex flex-col sm:flex-row justify-center gap-5 w-full text-center">
            <div className="sm:w-52 flex flex-col items-center bg-green-100 text-green-800 px-5 py-3 rounded-lg shadow-sm">
              <span className="text-sm uppercase tracking-wider font-semibold text-green-600">
                Correct Answers
              </span>
              <span className="text-2xl font-bold">{correctAnswersCount}</span>
            </div>
            {currentLevel > 1 && (
              <div className="sm:w-52 flex flex-col items-center bg-blue-100 text-blue-800 px-5 py-3 rounded-lg shadow-sm">
                <span className="text-sm uppercase tracking-wider font-semibold text-blue-600">
                  Total Correct
                </span>
                <span className="text-2xl font-bold">
                  {totalCorrectAnswersCount}
                </span>
              </div>
            )}
          </div>

          <AlertDialogFooter className="flex flex-row justify-center items-center sm:items-center sm:justify-center gap-6 sm:gap-8 py-4">
            {/* Go Home Button */}
            <NavLink
              to="/"
              className="flex items-center justify-center size-14 sm:size-16 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 text-gray-600 shadow-md hover:shadow-lg hover:scale-105 hover:from-gray-200 hover:to-gray-300 active:scale-95 focus:outline-none  focus:ring-gray-400 transition-all duration-300 cursor-pointer"
              aria-label="Go Home"
            >
              <Home className="size-6" />
            </NavLink>

            {/* View Details Dialog - Correct and Incorrect Answers */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="flex items-center justify-center size-14 sm:size-16 rounded-lg bg-gradient-to-br from-teal-400 to-blue-400  border-blue-500 text-blue-900 shadow-md hover:shadow-lg hover:scale-105 hover:from-teal-400 hover:to-blue-500 active:scale-95 focus:outline-none  focus:ring-blue-400 transition-all duration-300 cursor-pointer"
                  aria-label="View Details"
                >
                  <List className="size-6" />
                </Button>
              </DialogTrigger>

              <DialogContent
                className="
      w-[95vw] max-w-md 
      rounded-2xl border border-blue-200 bg-gradient-to-b from-white via-blue-50 to-blue-100
      shadow-2xl
      transition-all duration-300
      animate-in fade-in-90 zoom-in-95
    "
              >
                <DialogHeader className="text-center space-y-1">
                  <DialogTitle className="text-3xl font-extrabold text-blue-700 tracking-tight">
                    Answers Summary
                  </DialogTitle>
                  <DialogDescription className="text-gray-500 font-medium">
                    Review your correct and incorrect answers
                  </DialogDescription>
                </DialogHeader>

                {/* Tabs Section */}
                <Tabs defaultValue="correct" className="w-full mt-4 flex">
                  <TabsList
                    className=" w-full
          grid grid-cols-2 gap-2 mb-5
          bg-blue-100/40 rounded-xl p-1 text-blue-700
        "
                  >
                    <TabsTrigger
                      value="correct"
                      className="w-full rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium transition"
                    >
                      <Check className="text-green-500" /> Correct
                    </TabsTrigger>
                    <TabsTrigger
                      value="false"
                      className="w-full rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium transition"
                    >
                      <X className="text-red-500" /> Incorrect
                    </TabsTrigger>
                  </TabsList>

                  {/* Correct Answers */}
                  <TabsContent
                    value="correct"
                    className="max-h-48 overflow-y-auto"
                  >
                    {correctAnswersList.length ? (
                      <ul className="grid gap-2 text-green-700 text-sm">
                        {correctAnswersList.map((answer) => (
                          <li
                            key={answer.id}
                            className="flex justify-between items-center bg-green-50 rounded-lg px-4 py-2 hover:bg-green-100 transition"
                          >
                            <span className="font-medium">
                              {answer.gender} {answer.word}
                            </span>
                            <span className="italic text-green-600">
                              {answer.translation}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-center py-4">
                        No correct answers yet.
                      </p>
                    )}
                  </TabsContent>

                  {/* Incorrect Answers */}
                  <TabsContent
                    value="false"
                    className="max-h-48 overflow-y-auto"
                  >
                    {falseAnswersList.length ? (
                      <ul className="grid gap-2 text-red-700 text-sm">
                        {falseAnswersList.map((answer) => (
                          <li
                            key={answer.id}
                            className="flex justify-between items-center bg-red-50 rounded-lg px-4 py-2 hover:bg-red-100 transition"
                          >
                            <span className="font-medium">
                              {answer.gender} {answer.word}
                            </span>
                            <span className="italic text-red-600">
                              {answer.translation}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-center py-4">
                        No incorrect answers.
                      </p>
                    )}
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>

            {/* Continue Playing Button */}
            <AlertDialogAction asChild>
              <Button
                onClick={handleContinueToNextLevel}
                className="flex items-center justify-center size-14 sm:size-16 rounded-lg bg-gradient-to-br from-yellow-300 to-amber-500 text-yellow-900 shadow-md hover:shadow-lg hover:scale-105 hover:from-yellow-300 hover:to-amber-600 active:scale-95 focus:outline-none focus:ring-yellow-400 transition-all duration-300 cursor-pointer"
                aria-label="Continue Practicing"
              >
                <Play className="size-6" />
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* header - progress & exit */}
      <div className="flex flex-col gap-2">
        {/* back / current noun count/ progress count */}
        <div className="flex items-center justify-between w-full">
          {/* Back link */}
          <NavLink
            to="/topics/noun-genders"
            className="w-11 flex  justify-start "
            aria-label="Go back to noun genders"
          >
            <MdClose className="size-6 text-gray-700 hover:text-red-500 transition-colors duration-300" />
          </NavLink>

          {/* Noun count */}
          <div className="text-lg font-semibold text-gray-800 select-none">
            {currentIndex + 1}
          </div>

          {/* Progress counter */}
          <div className=" w-11 text-base text-gray-500 select-none">
            <span className="font-medium text-gray-700">{progressStart}</span>
            /25
          </div>
        </div>
        {/* progress bar */}
        <Progress value={(progressStart / 25) * 100} />
        <div className="flex items-center justify-end w-full gap-1">
          <FaStar className="text-yellow-600" />
          <span>Level {currentLevel}</span>
        </div>
      </div>

      {/* noun display */}
      <div className="flex flex-col items-center justify-center w-full gap-4  p-6  max-w-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight select-none">
          {currentNoun.word}
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 select-none">
          {currentNoun.translation}
        </h3>

        {currentNoun.hint && (
          <Popover>
            <PopoverTrigger asChild>
              <button
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg  text-yellow-800 font-medium text-base sm:text-lg bg-orange-100/90 backdrop-blur-md transition-all duration-200 cursor-pointer select-none"
                aria-label="Show hint about the noun"
              >
                <Info className="size-5 sm:size-6 text-yellow-700" />
                Hint
              </button>
            </PopoverTrigger>

            <PopoverContent>{currentNoun.hint}</PopoverContent>
          </Popover>
        )}
      </div>

      {/* Gender selection buttons */}
      <div className="flex justify-center gap-6 pb-10">
        {(['der', 'die', 'das'] as Gender[]).map((gender) => (
          <GenderButton
            key={gender}
            gender={gender}
            handleCheckAnswer={handleCheckAnswer}
          />
        ))}
      </div>
    </div>
  );
}
