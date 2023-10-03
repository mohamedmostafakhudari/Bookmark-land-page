import { cn } from '@/lib/utils';
import React from 'react';

const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    id="menu"
    className={cn('bg-slate-900/90 duration-300 ease-in-out', className)}
    {...props}
  />
));
Menu.displayName = 'Menu';

const MenuHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center justify-between py-6', className)}
    {...props}
  />
));
MenuHeader.displayName = 'MenuHeader';

const MenuList = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      'text-xl uppercase text-white [&>*:last-child]:border-b [&>*]:border-t [&>*]:border-white/10'
    )}
    {...props}
  />
));
MenuList.displayName = 'MenuList';

const MenuListItem = React.forwardRef(
  ({ className, children, href, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('text-center tracking-widest', className)}
      {...props}
    >
      <a href={href} className="block py-4">
        {children}
      </a>
    </li>
  )
);
MenuListItem.displayName = 'MenuListItem';

const MenuFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center justify-center gap-6 text-white',
      className
    )}
    {...props}
  />
));
MenuFooter.displayName = 'MenuFooter';

export { Menu, MenuHeader, MenuList, MenuListItem, MenuFooter };
