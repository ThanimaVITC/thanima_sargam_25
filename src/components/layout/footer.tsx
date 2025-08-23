import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-card text-card-foreground py-6">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="flex items-center justify-center">
          Made with <Heart className="w-4 h-4 mx-1 text-primary" /> by the team at Thanima.
        </p>
        <p className="text-muted-foreground mt-2">&copy; {new Date().getFullYear()} Sargam Celebrations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
