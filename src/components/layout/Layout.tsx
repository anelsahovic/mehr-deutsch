import { Outlet } from 'react-router';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <>
      <Navigation />
      <main className="w-full max-w-4xl mx-auto p-4 pb-16 sm:pb-4">
        <Outlet />
      </main>
    </>
  );
}
