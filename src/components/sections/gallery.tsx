
"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import ImagePopup from '@/components/image-popup';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const galleryImages = [
  { src: '/img1.jpg', alt: 'Stage performance', hint: 'stage performance' },
  { src: '/img2.jpg', alt: 'Cultural dance', hint: 'cultural dance' },
  { src: '/img3.jpg', alt: 'Band playing music', hint: 'music band' },
  { src: 'https://placehold.co/400x600.png', alt: 'Audience enjoying', hint: 'audience concert' },
  { src: '/img4.jpg', alt: 'Singer on stage', hint: 'singer concert' },
  { src: 'https://placehold.co/400x600.png', alt: 'Event decoration', hint: 'event decoration' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const renderImage = (image: any, width: number, height: number, className: string = "") => (
    <div className={cn("group rounded-lg overflow-hidden cursor-pointer", className)} onClick={() => setSelectedImage(image.src)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={width}
        height={height}
        data-ai-hint={image.hint}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
  )

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 w-[90%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Moments from Sargam 24</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A glimpse into the magic of our past events.
          </p>
        </div>
        
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-3 gap-4 h-[620px]">
            <div className="col-span-1 row-span-3 grid grid-rows-3 gap-4">
                {renderImage(galleryImages[0], 600, 400, "row-span-1")}
                {renderImage(galleryImages[1], 600, 400, "row-span-1")}
                {renderImage(galleryImages[2], 600, 400, "row-span-1")}
            </div>
            <div className="col-span-1 row-span-3">
                 {renderImage(galleryImages[3], 400, 600, "h-full")}
            </div>
            <div className="col-span-1 row-span-3 grid grid-rows-3 gap-4">
                {renderImage(galleryImages[4], 600, 400, "row-span-1")}
                {renderImage(galleryImages[5], 400, 600, "row-span-2")}
            </div>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-2 md:hidden gap-4">
            {galleryImages.map((image, index) => (
                <div key={index} className="group rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                   <Image
                     src={image.src}
                     alt={image.alt}
                     width={400}
                     height={600}
                     data-ai-hint={image.hint}
                     className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
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
