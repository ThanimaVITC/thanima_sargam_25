const PromoVideo = () => {
  return (
    <section id="video" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 w-[90%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Feel the Vibe</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Watch the official promo and get ready for an unforgettable experience.
          </p>
        </div>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;
