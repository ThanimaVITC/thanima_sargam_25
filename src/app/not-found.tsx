
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 z-0"></div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        <Image
          src="/fafa.webp"
          alt="Confused man"
          width={250}
          height={250}
          data-ai-hint="confused man"
          className="mx-auto mb-8 mt-8"
        />
        <h1 className="font-chilanka text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-8">
          എടാ മോനെ അത് ലൊക്കാ.. <br/> ഇങ്ങ് പോര്, ഇങ്ങ് പോര്, ഇങ്ങ് പോര്...
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Looks like you've taken a wrong turn. Let's get you back on track.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Go Back Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
