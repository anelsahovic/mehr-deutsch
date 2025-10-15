import MobilePageHeader from '@/components/MobilePageHeader';
import PracticeTopicsList from '@/components/PracticeTopicsList';

export default function Topics() {
  return (
    <div className="flex flex-col gap-4">
      {/* page header */}
      <MobilePageHeader backPath="/" pageTitle="Practice Topics" />

      {/* list of topics to practice */}
      <PracticeTopicsList />
    </div>
  );
}
