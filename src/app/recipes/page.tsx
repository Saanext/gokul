import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import RecipeGeneratorForm from "./RecipeGeneratorForm";
import { HoneyDipperIcon } from "@/components/icons/HoneyDipperIcon";

export default function RecipesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HoneyDipperIcon className="h-16 w-16 mx-auto text-accent mb-4" />
            <h1 className="text-4xl md:text-5xl font-headline text-accent mb-4">
              AI Recipe Generator
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Welcome to our kitchen! Tell us what ingredients you have (especially if you have our ghee and honey), and our AI will whip up a delicious recipe just for you.
            </p>
          </div>
          <RecipeGeneratorForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
