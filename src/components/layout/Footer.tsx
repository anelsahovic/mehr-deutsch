import { navLinks, practiceTopics } from '@/data/constants';
import { NavLink } from 'react-router';
import { NavbarLink } from '../NavbarLink';
import { Brain } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from '../ui/button';

export default function Footer() {
  return (
    <footer className="bg-footer-background px-4 sm:px-8 pt-12 pb-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-14">
        {/* Left: Logo, slogan, socials */}
        <div className="flex flex-col items-center sm:justify-start sm:items-start gap-2 min-w-[180px]">
          <NavLink
            to="/"
            className="flex items-center justify-center sm:justify-start gap-2"
          >
            <img
              src="/images/mehr_deutsch_logo.png"
              alt="Mehr Deutsch Logo"
              className="size-16 object-contain"
            />
            <span className="text-xl font-black text-gray-100 whitespace-nowrap">
              Mehr Deutsch
            </span>
          </NavLink>
          <span className="text-gray-200 font-medium text-center sm:text-left text-base mb-4">
            Grammar Practice Made Simple
          </span>

          <NavLink
            to="/topics"
            className={twMerge(
              buttonVariants(),
              'rounded-[7px] group max-w-[170px] mx-auto md:mx-0'
            )}
          >
            <Brain className="size-4 group-hover:rotate-180 transition-all duration-300" />
            Practice Now
          </NavLink>
        </div>

        {/* Center: Practice Links */}
        <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start text-center sm:text-left">
          <h4 className="text-gray-100 font-bold text-lg mb-3 sm:pl-3">
            Practice
          </h4>
          <div className="flex flex-col justify-center items-center sm:items-start">
            {practiceTopics.map((topic) => (
              <NavbarLink key={topic.id} link={topic} theme="light" />
            ))}
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col  justify-center sm:justify-start items-center sm:items-start text-center sm:text-left">
          <h4 className="text-gray-100 font-bold text-lg mb-3 sm:pl-3">
            Quick Links
          </h4>
          <div>
            {navLinks.map((link) => (
              <NavbarLink key={link.id} link={link} theme="light" />
            ))}
          </div>
        </div>

        {/* Right: PWA info and CTA */}
        <div className="flex flex-col items-center justify-center gap-10 max-w-[200px] mx-auto md:mx-0 text-center md:text-left">
          <div className="flex flex-col items-center justify-center gap-1">
            <h4 className="text-gray-100 font-bold text-lg mb-3">
              Installation
            </h4>
            <p className="text-gray-100 text-sm text-center">
              Mehr Deutsch is a Progressive Web App (PWA) and can be installed
              on your device for fast access. Learn more{' '}
              <NavLink
                to="/help"
                className="text-red-500 hover:underline hover:text-red-600 transition-all duration-300"
              >
                here
              </NavLink>
              .
            </p>
          </div>
          <Socials />
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="pb-16 sm:pb-0 w-full border-t border-red-100 mt-8 pt-3 text-center text-xs text-gray-400 tracking-wide">
        &copy; {new Date().getFullYear()} Mehr Deutsch · Made for learners, by
        learners. All rights reserved.
      </div>
    </footer>
  );
}

import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Socials() {
  const iconClass = 'size-6 text-red-600 hover:text-red-800 transition-colors';

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <h4 className="text-gray-100 font-semibold text-base mb-1">
        Let's Connect
      </h4>
      <div className="flex gap-4">
        <a
          href="https://github.com/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-full border border-red-500 hover:bg-red-200 transition"
        >
          <FaGithub className={iconClass} />
        </a>
        <a
          href="https://twitter.com/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="p-2 rounded-full border border-red-500 hover:bg-red-200 transition"
        >
          <FaTwitter className={iconClass} />
        </a>
        <a
          href="https://instagram.com/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-2 rounded-full border border-red-500 hover:bg-red-200 transition"
        >
          <FaInstagram className={iconClass} />
        </a>
        <a
          href="https://linkedin.com/in/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-full border border-red-500 hover:bg-red-200 transition"
        >
          <FaLinkedin className={iconClass} />
        </a>
      </div>
    </div>
  );
}
