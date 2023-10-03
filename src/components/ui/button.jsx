import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sm border text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:border-primary hover:bg-white hover:text-primary',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'text-slate-600 shadow-md shadow-slate-300 hover:border-slate-600',
        secondary:
          'bg-secondary text-secondary-foreground hover:border-secondary hover:bg-white hover:text-secondary',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'border-none text-slate-600 hover:text-secondary [#menu_&]:border-solid [#menu_&]:py-[1em] [#menu_&]:text-xl [#menu_&]:tracking-widest [#menu_&]:text-white [footer_&]:text-white',
        icon: 'rounded-full border-none',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
