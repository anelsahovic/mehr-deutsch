import { Outlet } from 'react-router';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navigation />
      <main className="flex-grow w-full max-w-4xl mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
