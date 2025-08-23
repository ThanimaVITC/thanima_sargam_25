import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Past event moment 1', hint: 'event concert' },
  { src: 'https://placehold.co/400x600.png', alt: 'Past event moment 2', hint: 'audience dancing' },
  { src: 'https://placehold.co/600x400.png', alt: 'Past event moment 3', hint: 'stage performance' },
  { src: 'https://placehold.co/600x400.png', alt: 'Past event moment 4', hint: 'cultural dance' },
  { src: 'https://placehold.co/400x600.png', alt: 'Past event moment 5', hint: 'singer performing' },
  { src: 'https://placehold.co/600x400.png', alt: 'Past event moment 6', hint: 'event lighting' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Moments from Sargam</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A glimpse into the magic of our past events.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
             <div key={index} className={`
                ${index === 1 || index === 4 ? 'col-span-1 row-span-2' : ''}
                ${index === 0 || index === 2 || index === 3 || index === 5 ? 'col-span-1 md:col-span-1' : ''}
                group overflow-hidden rounded-lg
             `}>
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={index === 1 || index === 4 ? 400 : 600}
                    height={index === 1 || index === 4 ? 600 : 400}
                    data-ai-hint={image.hint}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
