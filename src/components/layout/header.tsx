import Image from 'next/image';

type HeaderProps = {
  isVisible: boolean;
};

const Header = ({ isVisible }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm shadow-md transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="https://placehold.co/120x60.png"
            alt="Sargam Logo"
            width={120}
            height={60}
            data-ai-hint="event logo"
            className="object-contain"
          />
          <h1 className="text-2xl font-headline font-bold text-primary">Sargam</h1>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="font-headline text-foreground hover:text-primary transition-colors">About</a>
            <a href="#guess" className="font-headline text-foreground hover:text-primary transition-colors">Celebrity Guess</a>
            <a href="#video" className="font-headline text-foreground hover:text-primary transition-colors">Video</a>
            <a href="#gallery" className="font-headline text-foreground hover:text-primary transition-colors">Gallery</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
