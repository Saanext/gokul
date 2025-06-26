import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sprout, Beaker, HeartHandshake } from 'lucide-react';

export function RecipeCallout() {
  return (
    <section id="why-us" className="py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-2xl opacity-0 animate-fade-in-up">
           <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1528460033278-a6ba57020470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc1MTAzOTY5NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Lush green leaves background"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="nature background"
            />
          </div>
          <div className="relative z-10 text-center text-white p-8 sm:p-12">
            <h2 className="text-3xl md:text-5xl font-headline mb-6">
              Why Choose Gokul Diary?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Our philosophy is simple: what comes from nature should be returned to you in its purest form. This belief is at the heart of everything we do.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                    <Sprout className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-headline text-xl font-bold mb-2">Sourced Sustainably</h3>
                    <p className="text-white/80">We partner with local farmers who share our values, ensuring our ingredients are ethically and sustainably harvested.</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                    <Beaker className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-headline text-xl font-bold mb-2">Rigorously Tested</h3>
                    <p className="text-white/80">Every batch undergoes strict testing for purity and potency. If it doesn't meet our high standards, it doesn't leave our doors.</p>
                </div>
                 <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                    <HeartHandshake className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-headline text-xl font-bold mb-2">Crafted with Care</h3>
                    <p className="text-white/80">We use traditional, time-honored methods to preserve the natural nutrients and flavors of our ghee and honey.</p>
                </div>
            </div>
            <Button asChild size="lg" className="font-headline bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 mt-12">
              <Link href="#products">
                Explore Our Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
