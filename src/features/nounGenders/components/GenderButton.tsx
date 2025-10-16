import type { Gender } from '../types/nounGenders.types';
import { Button } from '@/components/ui/button';

type Props = {
  gender: Gender;
  handleCheckAnswer: (answer: string) => void;
};

export default function GenderButton({ gender, handleCheckAnswer }: Props) {
  const colors = {
    der: [
      'from-blue-500',
      'to-blue-600',
      'hover:from-blue-600',
      'hover:to-blue-700',
      'focus:ring-blue-400',
      'text-white',
    ],
    die: [
      'from-pink-500',
      'to-pink-600',
      'hover:from-pink-600',
      'hover:to-pink-700',
      'focus:ring-pink-400',
      'text-white',
    ],
    das: [
      'from-green-500',
      'to-green-600',
      'hover:from-green-600',
      'hover:to-green-700',
      'focus:ring-green-400',
      'text-white',
    ],
  };

  const [fromColor, toColor, hoverFrom, hoverTo, focusRing, textColor] =
    colors[gender];
  return (
    <Button
      key={gender}
      onClick={() => handleCheckAnswer(gender)}
      className={`
          rounded-full size-[74px] sm:size-20 text-xl
          bg-gradient-to-br ${fromColor} ${toColor}
          hover:${hoverFrom} hover:${hoverTo}
          focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-white ${focusRing}
          shadow-lg shadow-${
            gender === 'der' ? 'blue' : gender === 'die' ? 'pink' : 'green'
          }-400/50
          cursor-pointer
          transition-transform duration-200
          active:scale-95
          flex items-center justify-center
          font-semibold
          select-none
          ${textColor}
        `}
      aria-label={`Select gender ${gender}`}
    >
      {gender}
    </Button>
  );
}
