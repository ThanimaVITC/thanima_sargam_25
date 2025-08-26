import Image from 'next/image';

const CelebrityGuest = () => {
  return (
    <section id="celebrity-guest" className="py-20 md:py-32 bg-background font-body">
      <div className="container mx-auto px-4 w-[90%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-tankindred font-bold text-primary">Our Guest of Honour</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="relative w-64 h-80 md:w-80 md:h-96 flex-shrink-0">
            <Image
              src="/annaben-no-bg.png"
              alt="Anna Ben"
              fill
              data-ai-hint="celebrity portrait"
              className="object-contain filter drop-shadow-2xl"
            />
          </div>
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Anna Ben</h3>
            <p className="text-lg text-muted-foreground mt-4 font-gambarino">
              We are thrilled to welcome the incredibly talented and versatile actress, Anna Ben, as our esteemed guest for Sargam '25. Get ready to be charmed by her presence!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityGuest;
