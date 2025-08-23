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
      
      <div className={`container mx-auto px-4 z-20 transition-all duration-700 ease-in-out ${isHeaderVisible ? 'pt-0' : 'pt-20'} w-[90%]`}>
        <div className={`flex flex-col lg:flex-row items-center transition-all duration-700 ease-in-out ${isHeaderVisible ? 'justify-center' : 'justify-between'}`}>
          <div className={`transition-all duration-700 ease-in-out ${isHeaderVisible ? 'w-0 opacity-0 -translate-x-full' : 'w-full lg:w-1/3 opacity-100 translate-x-0'}`}>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
                <Image
                    src="/sargam_logo.png"
                    alt="Sargam Logo"
                    width={200}
                    height={100}
                    priority
                    data-ai-hint="event logo modern"
                    className="filter drop-shadow-2xl"
                />
                <p className="font-headline mt-2 text-lg">by Thanima VITC</p>
            </div>
          </div>
          <div className={`flex-grow transition-all duration-700 ease-in-out ${isHeaderVisible ? 'w-full' : 'w-full lg:w-2/3'}`}>
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
