import MobilePageHeader from '@/components/MobilePageHeader';
import NounGendersTheory from '@/features/nounGenders/components/NounGendersTheory';
import TopicInfoHeaderCard from '@/components/TopicInfoHeaderCard';
import { practiceTopics } from '@/data/constants';

export default function NounGenders() {
  const topic = practiceTopics.find(
    (topic) => topic.title.trim().toLowerCase() === 'noun genders'
  );

  if (!topic) return;

  return (
    <div className="flex flex-col gap-8">
      <MobilePageHeader backPath="/topics" pageTitle={topic.title} />

      {/*topic quick info/action */}
      <TopicInfoHeaderCard topic={topic} />

      {/*topic page theory */}
      <NounGendersTheory />
    </div>
  );
}
