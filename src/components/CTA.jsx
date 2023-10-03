import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import errorIcon from '@/assets/icon-error.svg';
import React from 'react';
import { cn } from '@/lib/utils';
const CTA = () => {
  const [emailInput, setEmailInput] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);
  function handleChange(e) {
    setIsError(!e.target.checkValidity());
    setEmailInput(e.target.value);
  }
  return (
    <section className="mt-40 bg-primary py-12 text-center text-white">
      <div className="container flex max-w-screen-sm flex-col items-center sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-sm">
        <div className="space-y-3 md:space-y-12">
          <p className="text-xs uppercase tracking-[4px] md:text-base">
            35,000<span className="mr-2">+</span>already joined
          </p>
          <h4 className="text-white">
            Stay up-to-date with what <br /> we&apos;re doing
          </h4>
        </div>
        <form
          action="/"
          method="post"
          className="group text-slate-800 md:mt-12"
          noValidate
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative isolate mt-8 flex flex-1 flex-col rounded-sm md:mt-0">
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  value={emailInput}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={cn(
                    'peer min-w-[330px] border-2 border-destructive/0',
                    isError && !isFocus && 'border-destructive/100'
                  )}
                />
                <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  <img src={errorIcon} alt="" />
                </div>
              </div>
              <div
                className={cn(
                  'relative -top-10 -z-10 hidden rounded-md bg-destructive text-destructive-foreground',
                  isError && !isFocus && 'block'
                )}
              >
                <div className="px-4 pb-1 pt-10 text-left font-medium italic">
                  <small>Whoops, make sure it&apos;s an email</small>
                </div>
              </div>
            </div>
            <Button
              variant="secondary"
              className={cn(
                'whitespace-nowrap border-none group-invalid:pointer-events-none group-invalid:opacity-30 md:py-6',
                isError && !isFocus && '-mt-10'
              )}
            >
              Contact Us
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTA;
