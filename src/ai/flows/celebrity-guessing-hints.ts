'use server';
/**
 * @fileOverview Provides AI-generated hints for the celebrity guessing game.
 *
 * - celebrityGuessingHints - A function that returns hints for a celebrity.
 * - CelebrityGuessingHintsInput - The input type for the celebrityGuessingHints function.
 * - CelebrityGuessingHintsOutput - The return type for the celebrityGuessingHints function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CelebrityGuessingHintsInputSchema = z.object({
  celebrityName: z.string().describe('The name of the celebrity to provide hints for.'),
  difficultyLevel: z
    .enum(['easy', 'medium', 'hard'])
    .describe('The difficulty level of the hints.'),
  numberOfHints: z
    .number()
    .min(1)
    .max(3)
    .default(1)
    .describe('The number of hints to provide.'),
});
export type CelebrityGuessingHintsInput = z.infer<typeof CelebrityGuessingHintsInputSchema>;

const CelebrityGuessingHintsOutputSchema = z.object({
  hints: z.array(z.string()).describe('An array of hints for the celebrity.'),
});
export type CelebrityGuessingHintsOutput = z.infer<typeof CelebrityGuessingHintsOutputSchema>;

export async function celebrityGuessingHints(
  input: CelebrityGuessingHintsInput
): Promise<CelebrityGuessingHintsOutput> {
  return celebrityGuessingHintsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'celebrityGuessingHintsPrompt',
  input: {schema: CelebrityGuessingHintsInputSchema},
  output: {schema: CelebrityGuessingHintsOutputSchema},
  prompt: `You are an AI assistant designed to provide hints for a celebrity guessing game.

  The user is trying to guess the celebrity: {{{celebrityName}}}.

  Provide {{{numberOfHints}}} hint(s) about the celebrity, tailored to the difficulty level: {{{difficultyLevel}}}.

  The hints should be concise and avoid directly revealing the celebrity's identity. Focus on notable achievements, career highlights, or unique personal attributes.

  Format the output as a JSON object with a "hints" array containing the generated hints.

  For example:
  {
    "hints": [
      "This celebrity is known for their role in...",
      "They have received awards for...",
      "A fun fact about them is..."
    ]
  }`,
});

const celebrityGuessingHintsFlow = ai.defineFlow(
  {
    name: 'celebrityGuessingHintsFlow',
    inputSchema: CelebrityGuessingHintsInputSchema,
    outputSchema: CelebrityGuessingHintsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
