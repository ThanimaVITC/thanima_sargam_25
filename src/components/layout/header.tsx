import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  isVisible: boolean;
};

const Header = ({ isVisible }: HeaderProps) => {
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
        <nav className="hidden md:flex space-x-6 items-center">
            <a href="/#sargam-info" className="font-headline text-foreground hover:text-primary transition-colors">Sargam</a>
            <a href="/#about" className="font-headline text-foreground hover:text-primary transition-colors">About</a>
            <a href="/#video" className="font-headline text-foreground hover:text-primary transition-colors">Video</a>
            <Link href="/gallery" className="font-headline text-foreground hover:text-primary transition-colors">Gallery</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
