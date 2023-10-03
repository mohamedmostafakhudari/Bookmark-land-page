import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { FAQData } from '@/data';
import { Button } from '@/components/ui/button';
const FAQ = () => {
  return (
    <section className="mt-40">
      <div className="container max-w-screen-sm sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-sm">
        <div className="space-y-4 text-center">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12">
          <Accordion type="single" collapsible className="mt-12 self-stretch">
            {FAQData.map(({ question, answer }, i) => (
              <AccordionItem key={i} value={question}>
                <AccordionTrigger asChild className="cursor-pointer">
                  <h5 className="font-normal">
                    {question}
                    <ChevronDown className="h-6 w-6 shrink-0 text-primary transition-transform duration-200 md:h-8 md:w-8" />
                  </h5>
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button size="lg">More Info</Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
