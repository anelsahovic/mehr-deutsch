import PracticeTopicsList from '@/components/PracticeTopicsList';
import { MoveLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function Practice() {
  return (
    <div className="flex flex-col gap-4">
      {/* page header */}
      <div className="sm:hidden grid grid-cols-3 border-b border-neutral-400 p-2">
        <Link to="/" className="flex justify-start items-center">
          <MoveLeft className="size-7" />
        </Link>

        <h2 className="text-center text-2xl font-bold">Practice</h2>
      </div>

      {/* list of topics to practice */}
      <PracticeTopicsList />
    </div>
  );
}
