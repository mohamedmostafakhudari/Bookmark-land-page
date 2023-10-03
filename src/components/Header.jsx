import Navbar from '@/components/Navbar';
import {
  Menu,
  MenuFooter,
  MenuHeader,
  MenuList,
  MenuListItem,
} from '@/components/ui/menu';
import React from 'react';
import BookmarkLogo from '@/assets/logo-bookmark.svg?react';
import CloseIcon from '@/assets/icon-close.svg?react';
import FacebookIcon from '@/assets/icon-facebook.svg?react';
import TwitterIcon from '@/assets/icon-twitter.svg?react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Hero from '@/components/Hero';

const navItems = [
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
const Header = ({ menuOpen, onOpenMenu, onCloseMenu }) => {
  return (
    <header>
      <Navbar menuOpen={menuOpen} onOpenMenu={onOpenMenu} navItems={navItems} />
      <Hero />
      <Menu
        className={cn(
          'absolute left-0 top-0 h-full w-full translate-x-[200%] md:hidden',
          menuOpen && 'translate-x-0'
        )}
      >
        <div className="container mx-auto flex h-full flex-col justify-between outline">
          <div>
            <MenuHeader>
              <div className="text-white [&_#bookmarkIcon]:text-slate-600">
                <BookmarkLogo />
              </div>
              <div onClick={onCloseMenu} className="cursor-pointer p-4">
                <CloseIcon />
              </div>
            </MenuHeader>
            <div>
              <MenuList>
                {navItems.map(({ label, href }) => (
                  <MenuListItem key={label} href={href}>
                    {label}
                  </MenuListItem>
                ))}
              </MenuList>
              <Button variant="link" className="mt-6 w-full" asChild>
                <a href="#">LOGIN</a>
              </Button>
            </div>
          </div>
          <MenuFooter className="mb-10">
            <a href="#" className="block p-2">
              <FacebookIcon />
            </a>
            <a href="#" className="block p-2">
              <TwitterIcon />
            </a>
          </MenuFooter>
        </div>
      </Menu>
    </header>
  );
};

export default Header;
