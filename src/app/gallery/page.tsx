
"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import ImagePopup from '@/components/image-popup';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const allGalleryImages = [
  // This can be expanded with more images for the full gallery page
  { src: 'https://placehold.co/400x600.png', alt: 'Stage performance', hint: 'stage performance' },
  { src: 'https://placehold.co/400x500.png', alt: 'Audience enjoying', hint: 'audience concert' },
  { src: 'https://placehold.co/400x600.png', alt: 'Cultural dance', hint: 'cultural dance' },
  { src: 'https://placehold.co/400x550.png', alt: 'Singer on stage', hint: 'singer concert' },
  { src: 'https://placehold.co/400x550.png', alt: 'Event decoration', hint: 'event decoration' },
  { src: 'https://placehold.co/400x600.png', alt: 'Band playing music', hint: 'music band' },
  { src: 'https://placehold.co/400x500.png', alt: 'Traditional attire', hint: 'traditional attire' },
  { src: 'https://placehold.co/400x600.png', alt: 'Lighting setup', hint: 'event lighting' },
  { src: 'https://placehold.co/400x600.png', alt: 'Close-up of an artist', hint: 'artist portrait' },
  { src: 'https://placehold.co/400x550.png', alt: 'Happy faces in crowd', hint: 'happy crowd' },
  { src: 'https://placehold.co/400x600.png', alt: 'Another performance', hint: 'stage lights' },
  { src: 'https://placehold.co/400x500.png', alt: 'Event candid shot', hint: 'event candid' },
  { src: 'https://placehold.co/400x500.png', alt: 'Backstage moment', hint: 'backstage event' },
  { src: 'https://placehold.co/400x600.png', alt: 'Dance group', hint: 'dance group' },
  { src: 'https://placehold.co/400x550.png', alt: 'Colorful stage', hint: 'colorful stage' },
  { src: 'https://placehold.co/400x600.png', alt: 'Audience with lights', hint: 'audience lights' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-background min-h-screen">
       <header className="sticky top-0 z-40 bg-background/50 backdrop-blur-lg shadow-md">
           <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <h1 className="text-3xl font-headline font-bold text-primary">Gallery</h1>
                <Button asChild variant="ghost">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
           </div>
       </header>

      <main className="container mx-auto px-4 py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {allGalleryImages.map((image, index) => (
            <div key={index} className="break-inside-avoid" onClick={() => setSelectedImage(image.src)}>
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={600}
                data-ai-hint={image.hint}
                className="w-full h-auto object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </main>

      {selectedImage && <ImagePopup src={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
}
