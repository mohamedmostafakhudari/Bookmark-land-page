import React from 'react'
const tabs = [
  {
    label: 'Simple Bookmarking',
    content: {
      title: 'Bookmark in one click',
      body: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      imgSrc: featureImage1,
    },
  },
  {
    label: 'Speedy Searching',
    content: {
      title: 'Intelligent search',
      body: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      imgSrc: featureImage2,
    },
  },
  {
    label: 'Easy Sharing',
    content: {
      title: 'Share your bookmarks',
      body: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      imgSrc: featureImage3,
    },
  },
];
const CollectionOfComponents = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const isError = input === '';
  function handleSubmitEmail(e) {
    e.preventDefault();
    console.log(inputRef.current);
    console.log(inputRef.current.validity);
  }
  return (
    <div>
      <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="outline">Button</Button>

        <div className="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row lg:[&>:nth-child(2)]:mt-16 lg:[&>:nth-child(3)]:mt-32">
          
          <Card>
            <CardHeader>
              <img src={cardImage1} alt="" />
            </CardHeader>
            <CardContent>
              <h4 className="">Add to Chrome</h4>
              <p>Minimum version 62</p>
            </CardContent>
            <div className="pb-6">
              <img src={bgDots} alt="" className="" />
            </div>
            <CardFooter>
              <Button>Add & Install Extension</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img src={cardImage1} alt="" />
            </CardHeader>
            <CardContent>
              <h4 className="">Add to Chrome</h4>
              <p>Minimum version 62</p>
            </CardContent>
            <div className="pb-6">
              <img src={bgDots} alt="" className="" />
            </div>
            <CardFooter>
              <Button>Add & Install Extension</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-12">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button className="self-center">More Info</Button>
        </div>
        
        <Button variant="link" asChild>
          <a href="#">Link</a>
        </Button>
        
      </div>
    </div>
  )
}

export default CollectionOfComponents