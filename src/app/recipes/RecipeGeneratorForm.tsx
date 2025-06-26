'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RecipeGeneratorInput, generateRecipe, RecipeGeneratorOutput } from '@/ai/flows/recipe-generator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';

const formSchema = z.object({
  ingredients: z.string().min(3, 'Please enter at least one ingredient.'),
});

export default function RecipeGeneratorForm() {
  const [recipe, setRecipe] = useState<RecipeGeneratorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecipe(null);
    try {
      const input: RecipeGeneratorInput = { ingredients: values.ingredients };
      const result = await generateRecipe(input);
      setRecipe(result);
    } catch (error) {
      console.error('Error generating recipe:', error);
      toast({
        variant: 'destructive',
        title: 'Oh no! Something went wrong.',
        description: 'We couldn\'t generate a recipe at this moment. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Your Ingredients</CardTitle>
          <CardDescription>
            List the ingredients you have on hand, separated by commas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Ingredients</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., chicken, onions, our special ghee, tomatoes, forest honey..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-headline">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Recipe'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
         <Card className="mt-8 animate-pulse">
            <CardHeader>
                <div className="h-8 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="h-6 bg-muted rounded w-1/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                 <div className="h-6 bg-muted rounded w-1/4 mt-4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
            </CardContent>
        </Card>
      )}

      {recipe && (
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-accent">{recipe.recipeName}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-headline text-xl font-bold mb-2">Ingredients</h3>
              <p className="whitespace-pre-line text-foreground/80">{recipe.ingredients}</p>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold mb-2">Instructions</h3>
              <p className="whitespace-pre-line text-foreground/80">{recipe.instructions}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
