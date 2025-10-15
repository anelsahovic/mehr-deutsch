import { Brain } from 'lucide-react';
import { NavLink } from 'react-router';
import { buttonVariants } from '../ui/button';
import { twMerge } from 'tailwind-merge';
import { Badge } from '../ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { practiceTopics } from '@/data/practiceTopics';
import type { PracticeTopic } from '@/types/practice.types';

export default function DesktopNavigation() {
  const navLinks = [
    {
      id: 101,
      title: 'Home',
      path: '/',
      available: true,
    },
    {
      id: 102,
      title: 'About',
      path: '/about',
      available: true,
    },
    {
      id: 103,
      title: 'Help',
      path: '/help',
      available: true,
    },
  ];

  const soonLinks = [
    {
      id: 104,
      title: 'My Profile',
      path: '/my-profile',
      available: false,
    },
    {
      id: 105,
      title: 'Leaderboard',
      path: '/leaderboard',
      available: false,
    },
    {
      id: 106,
      title: 'Settings',
      path: '/settings',
      available: false,
    },
  ];

  return (
    <div className="p-4 flex justify-center w-full z-[9999]">
      <div className="flex items-center justify-between max-w-4xl w-full h-16 px-6 bg-white/70 shadow-xs backdrop-blur-xl rounded-sm border border-r-zinc-300 z-[9999]">
        {/* Left div - logo */}
        <NavLink
          to="/"
          className="flex items-center justify-center gap-2 max-w-[170px]"
        >
          <img
            src="/images/mehr_deutsch_logo.png"
            alt="Mehr Deutsch Logo"
            className="size-10 object-contain"
          />
          <span className=" hidden md:block font-black text-gray-800 ">
            Mehr Deutsch
          </span>
        </NavLink>

        {/* Center div - nav items */}
        <div className="flex items-center gap-4">
          {/* home link */}
          <NavbarLink size="default" link={navLinks[0]} />

          {/* practice dropdown links */}
          <NavbarDropdown label="Topics" topics={practiceTopics} />

          {/* rest of the links */}
          {navLinks.slice(1).map((link) => (
            <NavbarLink key={link.id} size="default" link={link} />
          ))}

          {/* links that are soon available */}
          <NavbarDropdown label="More" topics={soonLinks} />
        </div>

        {/* Right div - action */}
        <NavLink
          to="/topics"
          className={twMerge(
            buttonVariants(),
            'rounded-[7px]  group max-w-[170px]'
          )}
        >
          <Brain className="hidden md:block size-4 group-hover:rotate-180 transition-all duration-300" />
          Practice Now
        </NavLink>
      </div>
    </div>
  );
}

interface NavbarLinkProps {
  link: PracticeTopic;
  size?: 'sm' | 'default';
}

function NavbarLink({ link, size = 'default' }: NavbarLinkProps) {
  const paddingClass = size === 'sm' ? 'px-2 py-1.5' : 'px-3 py-2';
  const fontSizeClass = size === 'sm' ? 'text-sm' : 'text-base';

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
          isActive ? ' text-primary' : 'text-gray-800 hover:text-primary'
        )
      }
    >
      <span>{link.title}</span>
    </NavLink>
  );
}

interface NavbarDropdownProps {
  label: string;
  topics: PracticeTopic[];
}
function NavbarDropdown({ label, topics }: NavbarDropdownProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-0 m-0 hover:cursor-pointer text-base font-medium">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white/70 shadow flex flex-col gap-1 ">
            {topics.map((topic) => (
              <NavigationMenuLink
                asChild
                key={topic.id}
                className="whitespace-nowrap"
              >
                <NavbarLink size="sm" link={topic} />
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
