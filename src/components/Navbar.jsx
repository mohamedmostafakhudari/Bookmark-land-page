import React from 'react';
import BookmarkLogo from '@/assets/logo-bookmark.svg?react';
import HamburgerIcon from '@/assets/icon-hamburger.svg?react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
const Navbar = ({ menuOpen, navItems, onOpenMenu }) => {
  return (
    <nav className="py-6">
      <div className="container flex max-w-screen-lg items-center justify-between">
        <a href="#" className={clsx(menuOpen && 'hidden')}>
          <BookmarkLogo className="text-primary [&_#bookmarkIcon]:text-white [&_#bookmarkText]:text-slate-800" />
        </a>
        <Button
          variant="icon"
          size="icon"
          onClick={onOpenMenu}
          className={clsx('md:hidden', menuOpen && 'hidden')}
        >
          <HamburgerIcon />
        </Button>
        <div className="hidden items-center gap-8 md:flex ">
          <ul className="uppercase tracking-widest">
            {navItems.map(({ label, href }) => (
              <Button key={label} variant="link" asChild>
                <a href={href}>{label}</a>
              </Button>
            ))}
          </ul>
          <Button
            variant="secondary"
            size="lg"
            className="uppercase tracking-widest"
          >
            login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
