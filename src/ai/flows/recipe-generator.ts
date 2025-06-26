// Recipe-generator.ts
'use server';

/**
 * @fileOverview Recipe generator AI agent.
 *
 * - generateRecipe - A function that generates recipes based on user provided ingredients.
 * - RecipeGeneratorInput - The input type for the generateRecipe function.
 * - RecipeGeneratorOutput - The return type for the generateRecipe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeGeneratorInputSchema = z.object({
  ingredients: z
    .string()
    .describe('A comma-separated list of ingredients the user has on hand.'),
});
export type RecipeGeneratorInput = z.infer<typeof RecipeGeneratorInputSchema>;

const RecipeGeneratorOutputSchema = z.object({
  recipeName: z.string().describe('The name of the suggested recipe.'),
  ingredients: z
    .string()
    .describe('A list of ingredients required for the recipe.'),
  instructions: z.string().describe('The step-by-step instructions for the recipe.'),
});
export type RecipeGeneratorOutput = z.infer<typeof RecipeGeneratorOutputSchema>;

export async function generateRecipe(input: RecipeGeneratorInput): Promise<RecipeGeneratorOutput> {
  return generateRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recipeGeneratorPrompt',
  input: {schema: RecipeGeneratorInputSchema},
  output: {schema: RecipeGeneratorOutputSchema},
  prompt: `You are a recipe suggestion AI agent specializing in generating recipes that incorporate ghee and honey.

You will generate recipes based on the ingredients that the user has on hand, focusing on recipes that prominently feature ghee or honey.

Ingredients on hand: {{{ingredients}}}

Generate a recipe using the available ingredients.
`,
});

const generateRecipeFlow = ai.defineFlow(
  {
    name: 'generateRecipeFlow',
    inputSchema: RecipeGeneratorInputSchema,
    outputSchema: RecipeGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
