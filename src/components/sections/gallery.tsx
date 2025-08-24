
"use client";

import Image from 'next/image';
import { useState } from 'react';
import ImagePopup from '@/components/image-popup';

const galleryImages = [
  // Column 1
  { src: 'https://placehold.co/400x600.png', alt: 'Stage performance', hint: 'stage performance' },
  { src: 'https://placehold.co/400x500.png', alt: 'Audience enjoying', hint: 'audience concert' },
  { src: 'https://placehold.co/400x600.png', alt: 'Cultural dance', hint: 'cultural dance' },
  { src: 'https://placehold.co/400x550.png', alt: 'Singer on stage', hint: 'singer concert' },
  
  // Column 2
  { src: 'https://placehold.co/400x550.png', alt: 'Event decoration', hint: 'event decoration' },
  { src: 'https://placehold.co/400x600.png', alt: 'Band playing music', hint: 'music band' },
  { src: 'https://placehold.co/400x500.png', alt: 'Traditional attire', hint: 'traditional attire' },
  { src: 'https://placehold.co/400x600.png', alt: 'Lighting setup', hint: 'event lighting' },

  // Column 3
  { src: 'https://placehold.co/400x600.png', alt: 'Close-up of an artist', hint: 'artist portrait' },
  { src: 'https://placehold.co/400x550.png', alt: 'Happy faces in crowd', hint: 'happy crowd' },
  { src: 'https://placehold.co/400x600.png', alt: 'Another performance', hint: 'stage lights' },
  { src: 'https://placehold.co/400x500.png', alt: 'Event candid shot', hint: 'event candid' },

  // Column 4
  { src: 'https://placehold.co/400x500.png', alt: 'Backstage moment', hint: 'backstage event' },
  { src: 'https://placehold.co/400x600.png', alt: 'Dance group', hint: 'dance group' },
  { src: 'https://placehold.co/400x550.png', alt: 'Colorful stage', hint: 'colorful stage' },
  { src: 'https://placehold.co/400x600.png', alt: 'Audience with lights', hint: 'audience lights' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const columns = [
    galleryImages.slice(0, 4),
    galleryImages.slice(4, 8),
    galleryImages.slice(8, 12),
    galleryImages.slice(12, 16)
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 w-[90%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Moments from Sargam</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A glimpse into the magic of our past events.
          </p>
        </div>
        <div className="h-[60vh] md:h-[80vh] overflow-hidden relative">
          <div className="flex justify-center gap-4 h-full">
            {columns.map((column, colIndex) => (
              <div 
                key={colIndex}
                className="flex flex-col gap-4 animate-scroll"
                style={{
                  '--scroll-duration': `${(colIndex % 2 === 0 ? 40 : 60)}s`,
                  '--scroll-direction': colIndex % 2 === 0 ? 'normal' : 'reverse',
                } as React.CSSProperties}
              >
                {[...column, ...column].map((image, imgIndex) => (
                  <div key={imgIndex} className="group rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={600}
                      data-ai-hint={image.hint}
                      className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
        </div>
      </div>
      {selectedImage && <ImagePopup src={selectedImage} onClose={() => setSelectedImage(null)} />}
    </section>
  );
};

export default Gallery;
