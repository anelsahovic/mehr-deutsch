import MobilePageHeader from '@/components/MobilePageHeader';
import TopicInfoHeaderCard from '@/components/TopicInfoHeaderCard';
import { practiceTopics } from '@/data/constants';
import VerbsWithPrepositionsTheory from '../components/VerbsWithPrepositionsTheory';

export default function VerbsWithPrepositions() {
  const topic = practiceTopics.find(
    (topic) => topic.title.trim().toLowerCase() === 'verbs with prepositions',
  );

  if (!topic) return;

  return (
    <div className="flex flex-col gap-8">
      <MobilePageHeader backPath="/topics" pageTitle={topic.title} />

      {/*topic quick info/action */}
      <TopicInfoHeaderCard
        topic={topic}
        path="/topics/verbs-with-prepositions/lobby"
      />

      {/*topic page theory */}
      <VerbsWithPrepositionsTheory />
    </div>
  );
}
