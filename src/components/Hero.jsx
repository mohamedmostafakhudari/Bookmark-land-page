import React from 'react';
import heroImage from '@/assets/illustration-hero.svg';
import { heroData } from '@/data.js';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return (
    <div className="pt-16">
      <div className="container flex flex-col items-center gap-16 md:flex-row-reverse">
        <div className="relative md:flex-1">
          <div className="absolute -right-8 top-[18%] -z-10 h-[85%] w-[90%] rounded-bl-full rounded-tl-full bg-primary"></div>
          <img src={heroImage} alt="" />
        </div>
        <div className="space-y-8 text-center md:flex-1 md:text-left">
          <div className="mx-auto max-w-[30ch] space-y-4 sm:max-w-none md:mx-0">
            <h1 className="">{heroData.title}</h1>
            <p>{heroData.text}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button className="whitespace-nowrap">Get it on Chrome</Button>
            <Button variant="outline" className="whitespace-nowrap">
              Get it on Firefox
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
