import { buttonVariants } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { DAILY_TIPS, practiceTopics } from '@/data/constants';
import type { PracticeTopic } from '@/types/practice.types';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';

export default function Home() {
  const [tipIndex, setTipIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Change tip and trigger flip every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true); // flip to hide current tip
      setTimeout(() => {
        setTipIndex((i) => (i + 1) % DAILY_TIPS.length);
        setFlipped(false); // flip to show new tip
      }, 500); // flip duration (ms)
    }, 3500); // time between tip changes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Welcome Section*/}
      <section className="flex flex-col sm:flex-row items-end gap-20 relative w-full overflow-hidden z-30 rounded-lg shadow-lg bg-gradient-to-br from-rose-400 via-yellow-400 to-rose-300 px-6 py-8">
        {/* circle designs */}
        <div className=" absolute top-0 left-0 -translate-y-36 -translate-x-30 size-[300px] rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-400  z-20" />
        <div className="absolute top-0 left-0 -translate-y-40 -translate-x-30 size-[370px] rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-400 z-10" />
        <div className="absolute top-0 right-0 -translate-y-40 translate-x-40 size-[300px] rounded-full bg-gradient-to-tl from-amber-500 via-yellow-400 to-yellow-300 z-10" />

        {/* Branding and Text */}
        <div className="flex flex-col items-start flex-1 max-w-lg z-20">
          {/* Logo with brand name */}
          <NavLink
            to="/"
            className="flex items-center justify-center gap-2 mb-4"
          >
            <img
              src="/images/mehr_deutsch_logo.png"
              alt="Mehr Deutsch Logo"
              className="size-16 object-contain"
            />
            <span className="text-3xl  md:text-4xl font-black text-gray-800 ">
              Mehr Deutsch
            </span>
          </NavLink>

          {/* Description */}
          <p className="text-lg  text-gray-700 mb-8 leading-relaxed">
            Your daily companion to master German grammar. Dive into interactive
            exercises, receive motivating tips, and learn at your own rhythm.
          </p>

          {/* Calls to action */}
          <div className="flex gap-4">
            <NavLink to="/topics" className={buttonVariants({ size: 'lg' })}>
              Practice Now
            </NavLink>
            <NavLink
              to="/about"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              Learn More
            </NavLink>
          </div>
        </div>

        {/* Illustration and Caption */}
        <div className="flex flex-col  items-center sm:items-end justify-center sm:justify-end flex-1 max-w-sm text-center z-20">
          <img
            src="/images/assets/fill_the_blank_illustration.svg"
            alt="Fill in the blank illustration"
            className="w-full max-w-xs object-contain mb-6"
          />
          <span className="text-gray-700 font-medium text-sm sm:text-base">
            Engaging challenges that boost your skills
          </span>
        </div>
      </section>

      {/* Practice Topics Slider Section */}
      <section className="flex flex-col w-full mt-16 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Topics</h2>

        <div className="relative">
          <Carousel className="w-full overflow-hidden">
            <CarouselContent>
              {practiceTopics.slice(0, 3).map((topic) => (
                <CarouselItem
                  key={topic.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <TopicCard topic={topic} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Modern buttons */}
            <CarouselPrevious className="hidden sm:flex md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-black/40 text-white shadow-md backdrop-blur-sm hover:bg-black/60 hover:text-primary hover:ring-2 hover:ring-primary hover:scale-105 transition-all duration-300" />
            <CarouselNext className="hidden sm:flex md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-black/40 text-white shadow-md backdrop-blur-sm hover:bg-black/60 hover:text-primary hover:ring-2 hover:ring-primary hover:scale-105 transition-all duration-300" />
          </Carousel>
        </div>
      </section>

      {/* CTA: All Topics Section */}
      <div className="w-full flex justify-center mb-12">
        <NavLink
          to="/topics"
          className="rounded-lg bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-rose-400 text-white text-lg font-bold px-10 py-4 shadow-md hover:from-indigo-700 hover:via-fuchsia-600 hover:to-rose-500 transition-colors duration-300"
        >
          Explore All Topics
        </NavLink>
      </div>

      {/* Tip Flip Section */}
      <section
        className="
  w-full max-w-2xl mx-auto my-12 rounded-lg shadow-md bg-white border border-slate-100
  px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 overflow-hidden relative
"
      >
        <div className="z-0 absolute left-0 bottom-0 translate-y-10 -translate-x-10 size-32 rounded-full bg-gradient-to-br from-fuchsia-400 via-yellow-400 to-blue-400 opacity-30 blur-3xl" />
        <div className="z-0 absolute right-0 top-0 -translate-y-10 translate-x-10 size-32 rounded-full bg-gradient-to-br from-purple-400 via-amber-400 to-blue-400 opacity-30 blur-3xl" />

        <div className="flex-1 z-10">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-bold rounded-full tracking-wide shadow-sm">
            🌟 Tip for You
          </div>
          <motion.p
            className="text-lg text-slate-900 dark:text-slate-100 font-medium leading-relaxed"
            animate={{ rotateX: flipped ? 180 : 0 }}
            transition={{ ease: 'easeInOut', duration: 0.7 }}
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            {DAILY_TIPS[tipIndex]}
          </motion.p>
        </div>
      </section>

      {/*Install App Prompt Section */}
      <section
        className="
  w-full mx-auto rounded-lg shadow-md border border-transparent
  bg-gradient-to-br from-fuchsia-100 via-white to-blue-10
  px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-6
  relative overflow-hidden
"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/*Plus Icon */}
          <div className="bg-rose-600/80 text-white text-3xl rounded-full p-3 shadow ring-2 ring-rose-500/50 shrink-0">
            <Plus />
          </div>

          {/* Heading and description */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2 text-center sm:text-start">
              Add Mehr Deutsch to your home screen
            </h2>
            <p className="text-slate-700 text-sm md:text-base text-center sm:text-start">
              No more searching—launch instantly and enjoy seamless learning on
              any device. Stay up to date, even offline!
            </p>
          </div>
        </div>
        <NavLink
          className="
      bg-rose-600 hover:bg-rose-700 transition text-white font-bold
      py-2 px-5 rounded shadow focus:outline-none focus:ring-2 focus:ring-rose-300
      text-base md:ml-8 whitespace-nowrap
    "
          to="/help"
          aria-label="Show installation instructions"
        >
          Learn how
        </NavLink>
        <div className="absolute right-0 -bottom-5 w-40 h-24 bg-fuchsia-400/30 rounded-tl-full blur-2xl pointer-events-none" />
      </section>
    </>
  );
}

interface TopicCardProps {
  topic: PracticeTopic;
}
function TopicCard({ topic }: TopicCardProps) {
  return (
    <div
      className={`
        group relative flex flex-col rounded-lg shadow overflow-hidden
        bg-white transition-transform duration-300 ease-in-out
        ${!topic.available ? 'opacity-60 grayscale' : ''}
        max-w-xs w-full mx-auto h-[350px]
      `}
    >
      {topic.imageUrl ? (
        <img
          src={topic.imageUrl}
          alt={topic.title}
          className="w-full h-40 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 truncate line-clamp-1">
          {topic.title}
        </h3>
        {topic.subtitle && (
          <p className="text-sm text-indigo-600 mt-1 truncate line-clamp-1">
            {topic.subtitle}
          </p>
        )}
        {topic.description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {topic.description}
          </p>
        )}
        <div className="mt-auto pt-4">
          {topic.available ? (
            <div className="flex items-center justify-between gap-2">
              <NavLink
                to={topic.path}
                className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg text-white text-sm font-semibold transition-colors"
              >
                Practice
              </NavLink>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full select-none">
                Available
              </span>
            </div>
          ) : (
            <span className="inline-block bg-gray-300 text-gray-600 text-xs font-medium px-3 py-1 rounded-full select-none">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
