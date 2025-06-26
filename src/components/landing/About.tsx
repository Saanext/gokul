import Image from "next/image";
import { Leaf, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Image
              src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob25leXxlbnwwfHx8fDE3NTA5Mzk5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Natural ingredients"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-110"
              data-ai-hint="honeycomb farm"
            />
          </div>
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-headline text-accent mb-4">
              From Nature, With Love
            </h2>
            <p className="mb-6 text-lg text-foreground/80">
              At Gokul Diary, we believe in the power of purity. Our ghee and honey are sourced from the finest natural environments, ensuring that every spoonful is packed with wholesome goodness. We follow traditional methods to bring you products that are not just food, but a promise of quality and health.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-primary/20 rounded-full mr-4">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-headline text-foreground">100% Organic</h3>
                  <p className="text-foreground/70">Sourced from pristine, pesticide-free environments to ensure absolute purity.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-primary/20 rounded-full mr-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-headline text-foreground">Award-Winning Taste</h3>
                  <p className="text-foreground/70">Recognized for our rich flavors and authentic, traditional preparation methods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
