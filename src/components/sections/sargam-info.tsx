
import { MapPin, Calendar, Clock, Trophy } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const timelineEvents = [
  { time: "9:00 AM", event: "Program starts" },
  { time: "9:10 AM", event: "Prayer song" },
  { time: "9:15 AM", event: "Welcome address" },
  { time: "10:10 AM", event: "Culturals start" },
  { time: "11:45 AM", event: "Arcade starts (till 2:15 PM)" },
  { time: "2:25 PM", event: "Culturals continue" },
  { time: "5:30 PM", event: "Chendamelam" },
];

const sportsEvents = [
    'Sack race', 'Lemon and spoon race', 'Uri adi', 'Musical chairs',
    'Sundarikk pottu thodal', 'Biscuit kadi', 'Arm wrestling', 'Tug of war'
];

const SargamInfo = () => {
  return (
    <section id="sargam-info" className="py-20 md:py-32 bg-background font-body">
      <div className="container mx-auto px-4 w-[90%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-barbra font-bold text-primary">What is Sargam?</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Sargam is the Onam celebration of VIT Chennai, a vibrant expression of culture, art, and togetherness.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card border-border/50 rounded-2xl flex flex-row overflow-hidden shadow-lg">
            <div className="flex-shrink-0 w-[80px] sm:w-[150px] bg-primary/10 p-4 flex items-center justify-center">
                <Image
                    src="/sargam_logo.png"
                    alt="Sargam Logo"
                    width={150}
                    height={75}
                    data-ai-hint="event logo"
                    className="object-contain w-20 md:w-36"
                />
            </div>
            <div className="flex-grow flex items-center p-2 sm:p-4 md:p-6">
                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-around gap-2 sm:gap-4 md:gap-8 text-left w-full">
                    <div className="flex items-center space-x-2 md:space-x-3">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 text-primary flex-shrink-0" />
                         <div>
                            <h3 className="text-xs sm:text-base md:text-xl font-gambarino font-semibold text-primary">Date</h3>
                            <p className="text-foreground text-[10px] sm:text-sm md:text-base font-gambarino">August 30th</p>
                        </div>
                    </div>
                    <Separator orientation='vertical' className="h-12 bg-border/50 hidden sm:block" />
                    <Separator orientation='horizontal' className="w-full bg-border/50 sm:hidden my-1" />
                     <div className="flex items-center space-x-2 md:space-x-3">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 text-primary flex-shrink-0" />
                        <div>
                            <h3 className="text-xs sm:text-base md:text-xl font-gambarino font-semibold text-primary">Venue</h3>
                            <p className="text-foreground text-[10px] sm:text-sm md:text-base font-gambarino">MG Auditorium</p>
                        </div>
                    </div>
                     <Separator orientation='vertical' className="h-12 bg-border/50 hidden sm:block" />
                     <Separator orientation='horizontal' className="w-full bg-border/50 sm:hidden my-1" />
                    <div className="flex items-center space-x-2 md:space-x-3">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 text-primary flex-shrink-0" />
                        <div>
                            <h3 className="text-xs sm:text-base md:text-xl font-gambarino font-semibold text-primary">Time</h3>
                            <p className="text-foreground text-[10px] sm:text-sm md:text-base font-gambarino">9:00 AM Onwards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="mt-20">
            <h3 className="text-xl font-tankindred font-bold text-center text-primary mb-12">Main Event Timeline (Aug 30)</h3>
            <div className="relative max-w-2xl mx-auto font-body">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50"></div>
                {timelineEvents.map((item, index) => (
                    <div key={index} className="relative flex items-center mb-8">
                        <div className="w-1/2">
                            {index % 2 === 0 ? (
                                <div className="flex justify-end pr-8 text-right">
                                    <div>
                                        <p className="font-bold text-lg text-foreground">{item.time}</p>
                                        <p className="text-muted-foreground font-body">{item.event}</p>
                                    </div>
                                </div>
                            ) : <div />}
                        </div>
                         
                         <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                         
                        <div className="w-1/2">
                           {index % 2 !== 0 ? (
                             <div className="pl-8 text-left">
                                 <p className="font-bold text-lg text-foreground">{item.time}</p>
                                 <p className="text-muted-foreground font-body">{item.event}</p>
                             </div>
                           ) : <div />}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-20">
            <h3 className="text-xl font-tankindred font-bold text-center text-primary mb-12">Sargam Sports (Aug 28)</h3>
            <div className="max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center p-8 bg-card border border-border/50 rounded-2xl shadow-lg font-body">
                     <div className="flex items-center space-x-3 mb-6 font-headline">
                        <Calendar className="h-6 w-6 text-primary" />
                        <span className="text-xl font-semibold text-foreground font-gambarino">August 28th</span>
                        <Separator orientation='vertical' className="h-6" />
                        <Clock className="h-6 w-6 text-primary" />
                        <span className="text-xl font-semibold text-foreground font-gambarino">9:30 AM Onwards</span>
                     </div>
                     <div className="w-full mb-6">
                        <h4 className="text-2xl font-tankindred font-semibold text-primary mb-4 flex items-center justify-center gap-2"><Trophy className="h-6 w-6"/> Events</h4>
                        <Separator className='w-1/4 mx-auto mb-4' />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 text-muted-foreground text-left font-body">
                           {sportsEvents.map((event, index) => (
                               <div key={index} className="flex justify-center md:justify-start">
                                    <p>{event}</p>
                               </div>
                           ))}
                        </div>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild>
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScrivHbQN7nQniv0_giSHGu1S3-T9jpTRA570JF-TSv4NSy8Q/viewform" target="_blank" rel="noopener noreferrer">Register for Arm Wrestling</Link>
                        </Button>
                        <Button asChild>
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScWXBWBulIsRTgGr9nuZH_Hn08_xZSV7xaSwpyVCTA3QK0Wzg/viewform" target="_blank" rel="noopener noreferrer">Register for Tug of War</Link>
                        </Button>
                     </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SargamInfo;
