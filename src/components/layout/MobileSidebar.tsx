import {
  Brain,
  ChevronDown,
  Copyright,
  HelpCircle,
  House,
  Info,
  Medal,
  Menu,
  Settings,
  User,
} from 'lucide-react';

import { NavLink } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Separator } from '../ui/separator';
import { useState, type ElementType } from 'react';
import { Badge } from '../ui/badge';
import { practiceTopics } from '@/data/constants';
import type { PracticeTopic } from '@/types/practice.types';

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const sidebarNavLinks = [
    {
      title: 'Home',
      icon: House,
      path: '/',
      available: true,
    },
    {
      id: 401,
      title: 'Practice Topics',
      icon: Brain,
      collapsible: practiceTopics,
    },
    {
      title: 'About',
      icon: Info,
      path: '/about',
      available: true,
    },
    {
      title: 'Help',
      icon: HelpCircle,
      path: '/help',
      available: true,
    },
    {
      title: 'My Profile',
      icon: User,
      path: '/my-profile',
      available: false,
    },
    {
      title: 'Leaderboard',
      icon: Medal,
      path: '/leaderboard',
      available: false,
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/settings',
      available: false,
    },
  ];
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu className="size-5 text-gray-100" />
      </SheetTrigger>
      <SheetContent
        className=" bg-white px-4 py-6 rounded-l-lg shadow-xl"
        side="right"
      >
        <SheetHeader className="flex flex-col w-full justify-center items-center">
          <img
            src="/images/mehr_deutsch_logo.png"
            alt="Mehr Deutsch Logo"
            className="size-20 object-contain"
          />
          <SheetTitle className="text-2xl font-bold tracking-wide">
            Mehr Deutsch
          </SheetTitle>
          <SheetDescription className="text-base text-gray-500 dark:text-gray-300 text-center flex justify-center items-center">
            Practice German Grammar
          </SheetDescription>
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 overflow-y-scroll">
          {sidebarNavLinks.map((link) => (
            <div
              key={link.title}
              onClick={() => !link.collapsible && setOpen(false)}
            >
              {link.collapsible ? (
                <SidebarCollapsibleLink link={link} />
              ) : (
                <SidebarLink link={link} />
              )}
            </div>
          ))}
        </nav>

        <Separator />

        <SheetFooter className="flex flex-col justify-center items-center gap-3 py-0">
          <div className="text-center italic text-gray-600">
            “Practice makes perfect!”
          </div>
          <div className="flex items-center justify-between w-full max-w-xs text-sm text-gray-500 ">
            <span>Beta 1.0</span>
            <span className="flex items-center gap-1">
              <Copyright className="size-3" />
              2025
            </span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

interface LinkItem {
  title: string;
  icon?: ElementType;
  path: string;
  available: boolean;
}

interface SidebarLinkProps {
  link: LinkItem;
  size?: 'sm' | 'default';
}

function SidebarLink({ link, size = 'default' }: SidebarLinkProps) {
  const iconSizeClass = size === 'sm' ? 'size-4' : 'size-5';
  const paddingClass = size === 'sm' ? 'px-2 py-1.5' : 'px-3 py-2';
  const fontSizeClass = size === 'sm' ? 'text-sm' : 'text-base';

  if (!link.available) {
    return (
      <div
        className={twMerge(
          `relative flex items-center gap-2 rounded-lg font-medium ${paddingClass} ${fontSizeClass} text-neutral-500 cursor-not-allowed select-none`
        )}
        aria-disabled="true"
      >
        {link.icon && <link.icon className={iconSizeClass} />}
        <span>{link.title}</span>
        <Badge
          variant="outline"
          className="border-primary text-primary ml-auto"
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
          `relative flex items-center gap-2 rounded-lg font-medium transition-colors duration-300 ${paddingClass} ${fontSizeClass}`,
          isActive
            ? 'bg-primary/20 text-primary'
            : 'text-gray-800 hover:bg-gray-100'
        )
      }
    >
      {link.icon && <link.icon className={iconSizeClass} />}
      <span>{link.title}</span>
    </NavLink>
  );
}

interface SidebarCollapsibleLinkProps {
  link: {
    id: number;
    title: string;
    icon?: ElementType;
    collapsible: PracticeTopic[];
  };
}

function SidebarCollapsibleLink({ link }: SidebarCollapsibleLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* link title - collapsible name/trigger */}
      <div
        className="flex items-center justify-between px-3 py-2 rounded-lg font-medium"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {/* icon and title */}
        <div className="flex items-center gap-2">
          {link.icon && <link.icon className="size-5" />}
          {link.title}
        </div>

        {/* chevron icon */}
        <ChevronDown
          className={twMerge(
            'size-5 text-gray-800 transition-all duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </div>

      <motion.div
        className="overflow-hidden pl-8 flex flex-col gap-2"
        initial={{ maxHeight: 0, opacity: 0, visibility: 'hidden' }}
        animate={{
          maxHeight: isOpen ? 500 : 0, // maxHeight in px for smooth collapse
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {link.collapsible.map((subLink) => (
          <SidebarLink key={subLink.title} link={subLink} size="sm" />
        ))}
      </motion.div>
    </div>
  );
}
