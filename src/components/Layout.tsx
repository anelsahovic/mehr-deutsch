import { Outlet } from 'react-router';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
