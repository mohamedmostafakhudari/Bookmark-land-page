import React from 'react';
import BookmarkLogo from '@/assets/logo-bookmark.svg?react';
import FacebookLogo from '@/assets/icon-facebook.svg?react';
import TwitterLogo from '@/assets/icon-twitter.svg?react';
import { Button } from '@/components/ui/button';

const footerItems = [
  {
    label: 'features',
    href: '#',
  },
  {
    label: 'pricing',
    href: '#',
  },
  {
    label: 'contact',
    href: '#',
  },
];
const Footer = () => {
  return (
    <footer className="bg-slate-700 py-8 text-white">
      <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-12 text-center md:flex-row md:text-left">
          <div>
            <BookmarkLogo className="text-primary [&_#bookmarkIcon]:text-white [&_#bookmarkText]:text-white" />
          </div>
          <ul className="flex flex-col items-center gap-6 md:flex-row">
            {footerItems.map(({ label, href }) => (
              <li key={label} className="text-sm uppercase tracking-wider">
                <Button variant="link" asChild>
                  <a href={href}>{label}</a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <Button
            variant="icon"
            size="icon"
            asChild
            className="hover:text-secondary"
          >
            <a href="#">
              <FacebookLogo />
            </a>
          </Button>
          <Button
            variant="icon"
            size="icon"
            asChild
            className="hover:text-secondary"
          >
            <a href="#">
              <TwitterLogo />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
