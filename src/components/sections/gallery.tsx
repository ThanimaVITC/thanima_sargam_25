
"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import ImagePopup from '@/components/image-popup';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Stage performance', hint: 'stage performance' },
  { src: 'https://placehold.co/400x600.png', alt: 'Audience enjoying', hint: 'audience concert' },
  { src: 'https://placehold.co/600x400.png', alt: 'Cultural dance', hint: 'cultural dance' },
  { src: 'https://placehold.co/400x600.png', alt: 'Singer on stage', hint: 'singer concert' },
  { src: 'https://placehold.co/400x600.png', alt: 'Event decoration', hint: 'event decoration' },
  { src: 'https://placehold.co/600x400.png', alt: 'Band playing music', hint: 'music band' },
  { src: 'https://placehold.co/600x400.png', alt: 'Traditional attire', hint: 'traditional attire' },
  { src: 'https://placehold.co/400x600.png', alt: 'Lighting setup', hint: 'event lighting' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 w-[90%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Moments from Sargam</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A glimpse into the magic of our past events.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
                 <div key={index} className="group rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      data-ai-hint={image.hint}
                      className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/gallery">
                    View Full Gallery <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </div>
      {selectedImage && <ImagePopup src={selectedImage} onClose={() => setSelectedImage(null)} />}
    </section>
  );
};

export default Gallery;
