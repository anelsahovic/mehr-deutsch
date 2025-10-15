import type { PracticeTopic } from '@/types/practice.types';
import { MdCategory } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa6';
import { NavLink } from 'react-router';

interface Props {
  topic: PracticeTopic;
}

export default function TopicInfoHeaderCard({ topic }: Props) {
  return (
    <div className="relative w-full overflow-hidden z-30 rounded-xl bg-gradient-to-br from-amber-500 via-yellow-500 to-yellow-400 shadow-lg px-6 py-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {/* circle designs */}
      <div className="absolute top-0 left-0 -translate-y-36 -translate-x-30 size-[300px] rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-400 z-20" />
      <div className="absolute top-0 left-0 -translate-y-40 -translate-x-30 size-[370px] rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-400 z-10" />
      <div className="absolute bottom-0 right-0 translate-y-40 translate-x-40 size-[300px] rounded-full bg-gradient-to-bl from-amber-500 via-yellow-400 to-yellow-300 z-10" />

      {/* Info and text block */}
      <div className="flex-1 flex flex-col gap-2 z-20">
        <div className="flex items-center gap-2">
          <MdCategory className="text-white size-6" />
          <span className="font-semibold text-white text-base tracking-wide">
            Practice Topic
          </span>
        </div>
        <h3 className="text-3xl font-extrabold text-white drop-shadow ">
          {topic.title}
        </h3>
        <h4 className="text-lg font-semibold text-white">{topic.subtitle}</h4>
        <p className="text-sm sm:text-base text-justify sm:text-left text-white/85">
          {topic.description}
        </p>
      </div>

      {/* Action Button block */}
      <div className="flex-shrink-0 flex items-center mt-6 sm:mt-0 z-20">
        <NavLink
          to={`${topic.path}/practice`}
          className="
        inline-flex items-center gap-2 
        px-5 py-3 
        bg-white text-yellow-600 font-semibold 
        rounded-lg shadow-md 
        hover:ring-2 hover:ring-yellow-400 hover:text-yellow-400
        focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 
        transition-all duration-300
        select-none
      "
        >
          <FaPlay className="w-5 h-5" aria-hidden="true" />
          <span>Start Practice</span>
        </NavLink>
      </div>
    </div>
  );
}
