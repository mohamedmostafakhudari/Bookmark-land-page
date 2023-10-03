import Header from '@/components/Header';
import { useState, useRef } from 'react';
import Features from '@/components/Features';
import Extensions from '@/components/Extensions';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header
        menuOpen={menuOpen}
        onOpenMenu={() => setMenuOpen(true)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <Features />
      <Extensions />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
