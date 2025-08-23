"use server";

import { celebrityGuessingHints, CelebrityGuessingHintsInput } from "@/ai/flows/celebrity-guessing-hints";

export async function getHints(input: CelebrityGuessingHintsInput) {
  try {
    const { hints } = await celebrityGuessingHints(input);
    return hints;
  } catch (error) {
    console.error("Error getting hints:", error);
    return ["Sorry, I couldn't come up with a hint right now. Please try again."];
  }
}
