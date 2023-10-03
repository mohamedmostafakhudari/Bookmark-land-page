import React from 'react';
import { featuresData } from '@/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
const Features = () => {
  return (
    <section className="mt-40">
      <div className="container">
        <div className="space-y-4 text-center">
          <h2>Features</h2>
          <p className="mx-auto max-w-[48ch]">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div>
          <Tabs
            defaultValue="Simple Bookmarking"
            className="mt-12 w-full space-y-20"
          >
            <TabsList>
              {featuresData.map(({ tabLabel }, i) => (
                <TabsTrigger
                  key={i}
                  value={tabLabel}
                  className="relative w-full border border-transparent border-t-slate-300 last:border-b-slate-300 md:w-fit md:border-b-slate-300 md:border-t-transparent"
                >
                  <div className="relative w-fit py-4 md:static md:px-4 md:py-6">
                    {tabLabel}
                    <div className="absolute -bottom-0.5 left-0 right-0 h-[0.3em] bg-secondary/0 group-data-[state=active]:bg-secondary/100"></div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {featuresData.map(({ tabLabel, title, text, imgSrc }, i) => (
              <TabsContent
                key={i}
                value={tabLabel}
                className="flex flex-col items-center justify-center gap-20 text-center md:flex-row md:gap-20 md:text-left"
              >
                <div className="relative flex-1">
                  <div className="absolute -left-8 top-[18%] -z-10 h-[100%] w-[100%] rounded-br-full rounded-tr-full bg-primary"></div>
                  <img src={imgSrc} alt={tabLabel} className="ml-auto" />
                </div>
                <div className="max-w-[45ch] flex-1 space-y-8">
                  <div>
                    <h3>{title}</h3>
                    <p className="">{text}</p>
                  </div>
                  <Button className="md:px-[1.5em] md:py-6">More Info</Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Features;
