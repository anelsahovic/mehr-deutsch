import { Link } from 'react-router';
import { Badge } from './ui/badge';
import type { PracticeTopic } from '@/types/practice.types';

interface Props {
  topic: PracticeTopic;
}

export default function PracticeTopicCard({ topic }: Props) {
  if (!topic.available) {
    return (
      <div className="group relative flex flex-col max-w-[350px] rounded-xl shadow-lg overflow-hidden cursor-not-allowed ">
        {/* Thumbnail */}
        <img
          src={topic.imageUrl}
          alt={topic.title}
          className="object-contain w-full grayscale-100 "
        />

        <div className="absolute inset-0 bg-black/60 opacity-10"></div>

        <div className="absolute top-1/2 left-1/2 translate-y-5 -translate-x-1/2">
          <Badge>Coming Soon</Badge>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={topic.path}
      className="group relative flex flex-col max-w-[350px] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Thumbnail */}
      <img
        src={topic.imageUrl}
        alt={topic.title}
        className="object-contain w-full "
      />

      {/* Overlay - Details */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center bg-black/70 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-lg md:text-xl font-bold mb-2">{topic.title}</h3>
        <p className="text-sm  font-medium line-clamp-3">{topic.description}</p>
      </div>
    </Link>
  );
}
