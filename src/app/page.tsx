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
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (window.scrollY > heroHeight - 100) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
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
      <RegisterButton isHeroVisible={isHeroVisible} />
    </div>
  );
}
