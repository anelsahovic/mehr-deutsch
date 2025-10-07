import { Link, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/noun-genders">Noun Genders</Link>
      </nav>
      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
}
