import Image from 'next/image';
import CountdownTimer from '@/components/countdown-timer';

type HeroProps = {
  isHeaderVisible: boolean;
};

const Hero = ({ isHeaderVisible }: HeroProps) => {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 z-0"></div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className={`container mx-auto px-4 z-20 transition-all duration-700 ease-in-out ${isHeaderVisible ? 'pt-0' : 'pt-0'} w-[90%]`}>
        <div className={`flex flex-col items-center transition-all duration-700 ease-in-out ${isHeaderVisible ? 'justify-center' : 'justify-between'}`}>
          <div className={`transition-all duration-700 ease-in-out text-center mb-8 ${isHeaderVisible ? 'lg:w-0 lg:opacity-0 lg:-translate-y-full' : 'lg:w-full lg:opacity-100 lg:translate-y-0'}`}>
              <Image
                  src="/sargam_logo.png"
                  alt="Sargam Logo"
                  width={200}
                  height={100}
                  priority
                  data-ai-hint="event logo modern"
                  className="filter drop-shadow-2xl mx-auto"
              />
          </div>
          <div className={`flex-grow transition-all duration-700 ease-in-out w-full`}>
            <CountdownTimer />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 z-20 text-white animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>
  );
};

export default Hero;
