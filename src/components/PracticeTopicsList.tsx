import { practiceTopics } from '@/data/practiceTopics';
import PracticeTopicCard from './PracticeTopicCard';

export default function PracticeList() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold sm:font-extrabold text-xl sm:text-3xl tracking-wider">
        Choose a topic to practice
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-6 p-4">
        {practiceTopics.map((topic) => (
          <PracticeTopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
