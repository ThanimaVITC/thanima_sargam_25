import { MapPin, Calendar, Clock, SeparatorVertical } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
            <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center">
                <div className="flex items-center space-x-3">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div className='text-left'>
                        <h3 className="text-xl font-headline font-semibold text-foreground">Venue</h3>
                        <p className="text-muted-foreground text-md">MG Auditorium</p>
                    </div>
                </div>
                <Separator orientation='vertical' className="h-12 bg-border/50 hidden md:block" />
                <div className="flex items-center space-x-3">
                    <Calendar className="h-8 w-8 text-primary" />
                     <div className='text-left'>
                        <h3 className="text-xl font-headline font-semibold text-foreground">Date</h3>
                        <p className="text-muted-foreground text-md">August 30th</p>
                    </div>
                </div>
                 <Separator orientation='vertical' className="h-12 bg-border/50 hidden md:block" />
                <div className="flex items-center space-x-3">
                    <Clock className="h-8 w-8 text-primary" />
                    <div className='text-left'>
                        <h3 className="text-xl font-headline font-semibold text-foreground">Time</h3>
                        <p className="text-muted-foreground text-md">9:00 AM Onwards</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SargamInfo;
