import { Brain, HelpCircle, House } from 'lucide-react';

import { NavLink, useLocation } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import MobileSidebar from './MobileSidebar';

export default function MobileNavigation() {
  const location = useLocation();
  const pathname = location.pathname;

  const mobileNavLinks = [
    {
      label: 'Home',
      icon: House,
      path: '/',
    },
    {
      label: 'Practice',
      icon: Brain,
      path: '/topics',
    },
    {
      label: 'Help',
      icon: HelpCircle,
      path: '/help',
    },
  ];

  return (
    <div className="fixed bottom-1 w-full h-16 z-50 py-1 px-2">
      <div className="flex items-center justify-between w-full h-full p-4 rounded-full bg-gradient-to-b from-primary via-primary/70 to-primary/60 backdrop-blur-2xl shadow-lg z-40">
        {mobileNavLinks.map((link) => {
          const isActive =
            pathname === link.path || pathname.startsWith(link.path + '/');

          return (
            <NavLink
              key={link.label}
              to={link.path}
              aria-current={isActive ? 'page' : undefined}
            >
              <motion.div
                layout
                className="relative flex items-center gap-1 rounded-full py-2 px-3 transition-all duration-300"
              >
                {/* animated background */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: isActive ? '100%' : '0',
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="w-full h-full rounded-full absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-md shadow"
                  style={{ zIndex: -1 }}
                />
                {/*link icon */}
                <link.icon
                  className={twMerge(
                    'size-5.5 transition-all duration-300',
                    isActive ? 'scale-105 text-primary' : 'text-gray-100'
                  )}
                />
                {/* link label */}
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="text-xs font-bold text-foreground whitespace-nowrap select-none"
                >
                  {link.label}
                </motion.span>
              </motion.div>
            </NavLink>
          );
        })}
        {/* sidebar */}
        <div className="flex items-center justify-center py-2 px-3">
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
}
