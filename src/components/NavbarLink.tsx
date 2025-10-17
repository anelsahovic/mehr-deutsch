import type { PracticeTopic } from '@/types/practice.types';
import { twMerge } from 'tailwind-merge';
import { Badge } from './ui/badge';
import { NavLink } from 'react-router';

interface NavbarLinkProps {
  link: PracticeTopic;
  size?: 'sm' | 'default';
  theme?: 'dark' | 'light';
}

export function NavbarLink({
  link,
  size = 'default',
  theme = 'dark',
}: NavbarLinkProps) {
  const paddingClass = size === 'sm' ? 'px-2 py-1.5' : 'px-3 py-2';
  const fontSizeClass = size === 'sm' ? 'text-sm' : 'text-base';
  const textColor = theme === 'dark' ? 'text-gray-800' : 'text-gray-100';

  if (!link.available) {
    return (
      <div
        className={twMerge(
          `relative flex items-center gap-1 rounded-lg font-medium ${paddingClass} ${fontSizeClass} text-neutral-500 cursor-not-allowed select-none`
        )}
        aria-disabled="true"
      >
        <span className="whitespace-nowrap">{link.title}</span>
        <Badge
          variant="outline"
          className="border-primary text-primary ml-auto scale-90"
        >
          Soon
        </Badge>
      </div>
    );
  }

  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        twMerge(
          `relative flex items-center gap-2 rounded-none font-medium transition-all duration-300 ${paddingClass} ${fontSizeClass}`,
          isActive ? ' text-primary' : `${textColor} hover:text-primary`
        )
      }
    >
      <span>{link.title}</span>
    </NavLink>
  );
}
