import { MapPin, Calendar, Clock } from 'lucide-react';

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

        <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <MapPin className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-headline font-semibold text-foreground">Venue</h3>
              <p className="text-muted-foreground text-lg">MG Auditorium</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Calendar className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-headline font-semibold text-foreground">Date</h3>
              <p className="text-muted-foreground text-lg">August 30th</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Clock className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-headline font-semibold text-foreground">Time</h3>
              <p className="text-muted-foreground text-lg">9:00 AM Onwards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SargamInfo;
