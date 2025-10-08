import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import { useMedia } from 'react-use';

export default function Navigation() {
  const isMobile = useMedia('(min-width: 480px)');

  return <>{!isMobile ? <MobileNavigation /> : <DesktopNavigation />}</>;
}
