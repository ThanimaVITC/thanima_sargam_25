"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import CelebrityGuesser from '@/components/sections/celebrity-guesser';
import PromoVideo from '@/components/sections/promo-video';
import Gallery from '@/components/sections/gallery';
import Footer from '@/components/layout/footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header isVisible={isScrolled} />
      <main className="flex-grow">
        <Hero isHeaderVisible={isScrolled} />
        <About />
        <CelebrityGuesser />
        <PromoVideo />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
