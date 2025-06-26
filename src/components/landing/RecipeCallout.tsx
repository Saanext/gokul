import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HoneyDipperIcon } from '@/components/icons/HoneyDipperIcon';

export function RecipeCallout() {
  return (
    <section id="recipes" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-2xl p-8 sm:p-12 min-h-[400px] flex items-center">
           <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1200x500.png"
              alt="Delicious food prepared with honey and ghee"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="food ingredients"
            />
          </div>
          <div className="relative z-10 max-w-2xl text-white">
            <h2 className="text-3xl md:text-5xl font-headline mb-4">
              Don't Just Taste, Create.
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Got some ingredients but not sure what to make? Let our AI chef inspire you with a custom recipe featuring our delicious ghee and honey.
            </p>
            <Button asChild size="lg" className="font-headline bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              <Link href="/recipes">
                <HoneyDipperIcon className="mr-2 h-5 w-5" />
                Generate a Recipe
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
