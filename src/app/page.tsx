"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import PromoVideo from '@/components/sections/promo-video';
import Gallery from '@/components/sections/gallery';
import Footer from '@/components/layout/footer';
import SargamInfo from '@/components/sections/sargam-info';
import RegisterButton from '@/components/sections/register-button';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        <SargamInfo />
        <About />
        <PromoVideo />
        <Gallery />
      </main>
      <Footer />
      <RegisterButton />
    </div>
  );
}
