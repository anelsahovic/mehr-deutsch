import { Outlet } from 'react-router';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <div>
      <Navigation />
      <main className="w-full max-w-5xl p-4">
        <Outlet />
      </main>
    </div>
  );
}
