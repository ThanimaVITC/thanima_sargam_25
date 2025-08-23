import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">What is Thanima?</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Discover the heart and soul behind Sargam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <h3 className="text-3xl font-headline font-semibold text-foreground">A Legacy of Culture &amp; Art</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Thanima is more than just a club; it's a vibrant community dedicated to celebrating and promoting cultural heritage through the arts. We believe in the power of music, dance, and creative expression to bring people together and create unforgettable experiences. Our events are a testament to our passion for fostering talent and sharing the richness of our traditions with a modern audience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    For years, we have been the architects of moments that resonate, curating events that are not just entertaining but also meaningful. Sargam is our flagship celebration, a culmination of our efforts to showcase artistic excellence and create a platform for artists and art lovers alike.
                </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 rounded-full">
                          <Target className="h-8 w-8 text-primary" />
                      </div>
                  </div>
                  <div>
                      <h4 className="text-xl font-headline font-semibold text-foreground">Our Mission</h4>
                      <p className="text-muted-foreground mt-2">To provide a platform for artistic expression, nurture emerging talent, and create high-quality cultural events that inspire and unite our community.</p>
                  </div>
              </div>
              <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 rounded-full">
                          <Eye className="h-8 w-8 text-primary" />
                      </div>
                  </div>
                  <div>
                      <h4 className="text-xl font-headline font-semibold text-foreground">Our Vision</h4>
                      <p className="text-muted-foreground mt-2">To be a leading name in cultural event organization, known for our innovation, quality, and commitment to preserving and promoting artistic traditions.</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
