import React from 'react';
import bgDots from '@/assets/bg-dots.svg';
import { extensionsData } from '@/data';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const Extensions = () => {
  return (
    <section className="mt-40">
      <div className="container">
        <div className="space-y-4 text-center md:mx-auto md:max-w-[48ch]">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div
          className="mt-16 flex flex-col flex-wrap items-center justify-center gap-12 md:flex-row lg:flex-nowrap lg:[&>*:last-child]:mt-24
        lg:[&>*:nth-child(2)]:mt-12"
        >
          {extensionsData.map(({ imgSrc, title, minVersion }, i) => (
            <Card key={title} className={``}>
              <CardHeader>
                <img src={imgSrc} alt="" />
              </CardHeader>
              <CardContent>
                <h4 className="whitespace-nowrap">{title}</h4>
                <p>Minimum version {minVersion}</p>
              </CardContent>
              <div className="pb-6">
                <img src={bgDots} alt="" className="" />
              </div>
              <CardFooter>
                <Button size="lg">Add & Install Extension</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extensions;
