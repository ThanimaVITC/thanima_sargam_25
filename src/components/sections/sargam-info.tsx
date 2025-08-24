
import { MapPin, Calendar, Clock, SeparatorVertical } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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

        <div className="max-w-5xl mx-auto border border-border/50 rounded-2xl p-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center md:justify-around">
                <div className="flex items-center space-x-3">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div className='text-left'>
                        <h3 className="text-xl font-headline font-semibold text-foreground">Venue</h3>
                        <p className="text-muted-foreground text-md">MG Auditorium</p>
                    </div>
                </div>
                <Separator orientation='vertical' className="h-12 bg-border/50 hidden sm:block" />
                <div className="flex items-center space-x-3">
                    <Calendar className="h-8 w-8 text-primary" />
                     <div className='text-left'>
                        <h3 className="text-xl font-headline font-semibold text-foreground">Date</h3>
                        <p className="text-muted-foreground text-md">August 30th</p>
                    </div>
                </div>
                 <Separator orientation='vertical' className="h-12 bg-border/50 hidden sm:block" />
                <div className="flex items-center space-x-3">
                    <Clock className="h-8 w-8 text-primary" />
                    <div className='text-left'>
                        <h3 className="text-xl font-headline font-semibold text-foreground">Time</h3>
                        <p className="text-muted-foreground text-md">9:00 AM Onwards</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-16">
            <h3 className="text-3xl font-headline font-bold text-center text-primary mb-12">Event Timeline</h3>
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50"></div>
                {timelineEvents.map((item, index) => (
                    <div key={index} className="relative flex items-center justify-center mb-8">
                         <div className="absolute w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                         {index % 2 === 0 ? (
                             <div className="w-1/2 pr-8 text-right">
                                 <p className="font-bold text-lg text-foreground">{item.time}</p>
                                 <p className="text-muted-foreground">{item.event}</p>
                             </div>
                         ) : (
                             <div className="w-1/2"></div>
                         )}
                         {index % 2 !== 0 ? (
                             <div className="w-1/2 pl-8 text-left">
                                 <p className="font-bold text-lg text-foreground">{item.time}</p>
                                 <p className="text-muted-foreground">{item.event}</p>
                             </div>
                         ) : (
                            <div className="w-1/2"></div>
                         )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SargamInfo;
