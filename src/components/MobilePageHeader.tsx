import { LucideCircleChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

interface Props {
  backPath: string;
  pageTitle: string;
}

export default function MobilePageHeader({ backPath, pageTitle }: Props) {
  return (
    <div className="sm:hidden flex items-center justify-between border-b border-neutral-400 p-2">
      <Link to={backPath} className="flex justify-start items-center">
        <LucideCircleChevronLeft className="size-7" />
      </Link>

      <h2 className=" text-center text-2xl font-bold ">{pageTitle}</h2>
      <div className="size-7"></div>
    </div>
  );
}
