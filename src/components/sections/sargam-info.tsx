
import { MapPin, Calendar, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

const timelineEvents = [
  { time: "9:00 AM", event: "Inauguration" },
  { time: "9:10 AM", event: "Welcome Speech" },
  { time: "9:20 AM", event: "Welcoming the Guest and Speech" },
  { time: "10:00 AM", event: "Cultural Program Starts" },
  { time: "10:30 AM", event: "Onam Games Starts (outside MG)" },
  { time: "12:00 PM", event: "Onam Sadya Starts" },
  { time: "6:00 PM", event: "Chendamela Starts" },
];

const SargamInfo = () => {
  return (
    <section id="sargam-info" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 w-[90%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">What is Sargam?</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Sargam is the Onam celebration of VIT Chennai, a vibrant expression of culture, art, and togetherness.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-lg">
            <div className="flex-shrink-0 w-full md:w-1/3 bg-primary/10 p-6 flex items-center justify-center">
                <Image
                    src="/sargam_logo.png"
                    alt="Sargam Logo"
                    width={150}
                    height={75}
                    data-ai-hint="event logo"
                    className="object-contain w-24 md:w-36"
                />
            </div>
            <div className="flex-grow flex items-center p-4 md:p-8">
                 <div className="flex flex-col md:flex-row items-center justify-around gap-4 md:gap-8 text-center md:text-left w-full">
                    <div className="flex items-center space-x-2 md:space-x-3">
                        <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                         <div className='text-left'>
                            <h3 className="text-lg md:text-xl font-headline font-semibold text-foreground">Date</h3>
                            <p className="text-muted-foreground text-sm md:text-md">August 30th</p>
                        </div>
                    </div>
                    <Separator orientation='vertical' className="h-12 bg-border/50 hidden md:block" />
                    <Separator orientation='horizontal' className="w-24 bg-border/50 md:hidden" />
                     <div className="flex items-center space-x-2 md:space-x-3">
                        <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                        <div className='text-left'>
                            <h3 className="text-lg md:text-xl font-headline font-semibold text-foreground">Venue</h3>
                            <p className="text-muted-foreground text-sm md:text-md">MG Auditorium</p>
                        </div>
                    </div>
                     <Separator orientation='vertical' className="h-12 bg-border/50 hidden md:block" />
                     <Separator orientation='horizontal' className="w-24 bg-border/50 md:hidden" />
                    <div className="flex items-center space-x-2 md:space-x-3">
                        <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                        <div className='text-left'>
                            <h3 className="text-lg md:text-xl font-headline font-semibold text-foreground">Time</h3>
                            <p className="text-muted-foreground text-sm md:text-md">9:00 AM Onwards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="mt-16">
            <h3 className="text-3xl font-headline font-bold text-center text-primary mb-12">Event Timeline</h3>
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50"></div>
                {timelineEvents.map((item, index) => (
                    <div key={index} className="relative flex items-center mb-8">
                        <div className="w-1/2">
                            {index % 2 === 0 ? (
                                <div className="flex justify-end pr-8 text-right">
                                    <div>
                                        <p className="font-bold text-lg text-foreground">{item.time}</p>
                                        <p className="text-muted-foreground">{item.event}</p>
                                    </div>
                                </div>
                            ) : <div />}
                        </div>
                         
                         <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                         
                        <div className="w-1/2">
                           {index % 2 !== 0 ? (
                             <div className="pl-8 text-left">
                                 <p className="font-bold text-lg text-foreground">{item.time}</p>
                                 <p className="text-muted-foreground">{item.event}</p>
                             </div>
                           ) : <div />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SargamInfo;
