import featureImage1 from '@/assets/illustration-features-tab-1.svg';
import featureImage2 from '@/assets/illustration-features-tab-2.svg';
import featureImage3 from '@/assets/illustration-features-tab-3.svg';
import chromeLogo from '@/assets/logo-chrome.svg';
import firefoxLogo from '@/assets/logo-firefox.svg';
import operaLogo from '@/assets/logo-opera.svg';
const heroData = {
  title: 'A Simple Bookmark Manager',
  text: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
};

const featuresData = [
  {
    tabLabel: 'Simple Bookmarking',
    title: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    imgSrc: featureImage1,
  },
  {
    tabLabel: 'Speedy Searching',
    title: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    imgSrc: featureImage2,
  },
  {
    tabLabel: 'Easy Sharing',
    title: 'Share your bookmarks',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    imgSrc: featureImage3,
  },
];
const extensionsData = [
  {
    imgSrc: chromeLogo,
    title: 'Add to Chrome',
    minVersion: '62',
  },
  {
    imgSrc: firefoxLogo,
    title: 'Add to Firefox',
    minVersion: '55',
  },
  {
    imgSrc: operaLogo,
    title: 'Add to Opera',
    minVersion: '46',
  },
];
const FAQData = [
  {
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    question: 'How can I request a new browser?',
    answer:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    question: 'What about other Chromium browsers?',
    answer:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
];
export { heroData, featuresData, extensionsData, FAQData };
