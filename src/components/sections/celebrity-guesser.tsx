"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lightbulb, Loader2, Sparkles } from 'lucide-react';
import { getHints } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const CelebrityGuesser = () => {
  const [guess, setGuess] = useState('');
  const [hints, setHints] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { toast } = useToast();

  const celebrityName = "Mohanlal"; // The secret celebrity name

  const handleGetHint = async () => {
    setIsLoading(true);
    try {
      const newHints = await getHints({
        celebrityName,
        difficultyLevel: 'medium',
        numberOfHints: 1,
      });
      setHints(prev => [...prev, ...newHints]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not fetch a hint. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim().toLowerCase() === celebrityName.toLowerCase()) {
      setIsCorrect(true);
      toast({
        title: "Correct!",
        description: `You guessed it! The celebrity is ${celebrityName}.`,
      });
    } else {
      setIsCorrect(false);
      toast({
        title: "Not quite!",
        description: "That's not the right celebrity. Try again!",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="guess" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Guess the Celebrity Guest!</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We have a special guest joining us at Sargam. Can you figure out who it is?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Sparkles className="text-accent" />
                <span>Mystery Guest</span>
              </CardTitle>
              <CardDescription className="text-center">
                Enter your guess below or ask for a hint!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isCorrect ? (
                 <div className="text-center p-8 bg-primary/10 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary">Congratulations!</h3>
                    <p className="text-foreground mt-2">You've guessed correctly! Get ready to see {celebrityName} at Sargam!</p>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Enter celebrity name..."
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    className="text-lg"
                  />
                  <Button type="submit" className="w-full" disabled={!guess}>
                    Submit Guess
                  </Button>
                </form>
              )}
               {hints.length > 0 && (
                <div className="mt-6 space-y-2">
                    <h4 className="font-semibold text-center text-foreground">Hints:</h4>
                    <ul className="list-disc list-inside bg-background/50 p-4 rounded-lg text-muted-foreground">
                        {hints.map((hint, index) => (
                            <li key={index}>{hint}</li>
                        ))}
                    </ul>
                </div>
                )}
            </CardContent>
            {!isCorrect && (
                <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleGetHint} disabled={isLoading}>
                    {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                    <Lightbulb className="mr-2 h-4 w-4" />
                    )}
                    {isLoading ? 'Getting Hint...' : 'Get a Hint'}
                </Button>
                </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CelebrityGuesser;
