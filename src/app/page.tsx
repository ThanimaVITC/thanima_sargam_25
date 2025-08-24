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
  const [showRegisterIcon, setShowRegisterIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      // Show icon when scrolled past the hero section (approx 100vh)
      setShowRegisterIcon(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
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
      <RegisterButton showIcon={showRegisterIcon} />
    </div>
  );
}
