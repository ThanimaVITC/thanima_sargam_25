
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type HeaderProps = {
  isVisible: boolean;
};

const Header = ({ isVisible }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#sargam-info", label: "Sargam" },
    { href: "/#about", label: "About" },
    { href: "/#video", label: "Video" },
    { href: "/gallery", label: "Gallery", isLink: true },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-background/50 backdrop-blur-lg shadow-md transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/sargam_logo.png"
            alt="Sargam Logo"
            width={50}
            height={25}
            data-ai-hint="event logo"
            className="object-contain"
          />
          <h1 className="text-2xl font-headline font-bold text-primary">Sargam</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map(link => (
              link.isLink ? (
                <Link key={link.href} href={link.href} className="font-headline text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="font-headline text-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              )
            ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex flex-col space-y-6">
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-headline text-primary">Menu</h2>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className='h-6 w-6 text-foreground' />
                    </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                    link.isLink ? (
                      <Link key={link.href} href={link.href} onClick={handleLinkClick} className="font-headline text-lg text-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a key={link.href} href={link.href} onClick={handleLinkClick} className="font-headline text-lg text-foreground hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    )
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
