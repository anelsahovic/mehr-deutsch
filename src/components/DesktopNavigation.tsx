import {
  Brain,
  HelpCircle,
  House,
  Info,
  Medal,
  Settings,
  User,
} from 'lucide-react';
import { NavLink } from 'react-router';
import { buttonVariants } from './ui/button';
import { twMerge } from 'tailwind-merge';
import { Badge } from './ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

export default function DesktopNavigation() {
  const navLinks = [
    {
      label: 'Home',
      icon: House,
      path: '/',
      available: true,
    },
    {
      label: 'About',
      icon: Info,
      path: '/about',
      available: true,
    },
    {
      label: 'Help',
      icon: HelpCircle,
      path: '/help',
      available: true,
    },
  ];

  const practiceLinks = [
    {
      label: 'Noun Genders',
      path: '/practice/noun-genders',
      available: true,
    },
    {
      label: 'Declensions',
      path: '/practice/declensions',
      available: false,
    },
    {
      label: 'Prepositions',
      path: '/practice/prepositions',
      available: false,
    },
    { label: 'Sentences', path: '/practice/sentences', available: false },
  ];

  const soonLinks = [
    {
      label: 'My Profile',
      icon: User,
      path: '/my-profile',
      available: false,
    },
    {
      label: 'Leaderboard',
      icon: Medal,
      path: '/leaderboard',
      available: false,
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/settings',
      available: false,
    },
  ];
  return (
    <div className="p-4 flex justify-center w-full z-50">
      <div className="flex items-center justify-between max-w-4xl w-full h-16 px-6 bg-white/70 shadow-xs backdrop-blur-xl rounded-sm border border-r-zinc-300">
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
          <NavbarDropdown label="Practice" links={practiceLinks} />

          {/* rest of the links */}
          {navLinks.slice(1).map((link) => (
            <NavbarLink key={link.label} size="default" link={link} />
          ))}

          {/* links that are soon available */}
          <NavbarDropdown label="More" links={soonLinks} />
        </div>

        {/* Right div - action */}
        <NavLink
          to="/practice"
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

interface LinkItem {
  label: string;
  path: string;
  available: boolean;
}

interface NavbarLinkProps {
  link: LinkItem;
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
        <span>{link.label}</span>
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
      <span>{link.label}</span>
    </NavLink>
  );
}

interface NavbarDropdownProps {
  label: string;
  links: LinkItem[];
}
function NavbarDropdown({ label, links }: NavbarDropdownProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-0 m-0 hover:cursor-pointer text-base font-medium">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white/70 shadow flex flex-col gap-1">
            {links.map((link) => (
              <NavigationMenuLink
                asChild
                key={link.label}
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
