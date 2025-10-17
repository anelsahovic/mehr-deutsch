import { Brain } from 'lucide-react';
import { NavLink } from 'react-router';
import { buttonVariants } from '../ui/button';
import { twMerge } from 'tailwind-merge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { navLinks, practiceTopics, soonLinks } from '@/data/constants';
import type { PracticeTopic } from '@/types/practice.types';
import { NavbarLink } from '../NavbarLink';

export default function DesktopNavigation() {
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
          <NavbarDropdown label="Topics" links={practiceTopics} />

          {/* rest of the links */}
          {navLinks.slice(1).map((link) => (
            <NavbarLink key={link.id} size="default" link={link} />
          ))}

          {/* links that are soon available */}
          <NavbarDropdown label="More" links={soonLinks} />
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

interface NavbarDropdownProps {
  label: string;
  links: PracticeTopic[];
}
function NavbarDropdown({ label, links }: NavbarDropdownProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-0 m-0 hover:cursor-pointer text-base font-medium">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white/70 shadow flex flex-col gap-1 ">
            {links.map((link) => (
              <NavigationMenuLink
                asChild
                key={link.id}
                className="whitespace-nowrap"
              >
                <NavbarLink size="sm" link={link} />
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
