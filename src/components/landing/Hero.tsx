import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center text-white">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Lush fields representing nature's harvest"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
          data-ai-hint="farm harvest"
        />
      </div>
      <div className="relative container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline mb-4 drop-shadow-lg">
          Nature's Harvest
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body mb-8 drop-shadow-md">
          Experience the pure essence of nature with our artisanal ghee and forest honey.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="font-headline bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            <Link href="#products">Shop Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-headline text-white border-white hover:bg-white hover:text-black text-lg px-8 py-6">
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" aria-label="Scroll down">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white animate-bounce">
            <ArrowDown size={20} />
          </div>
        </Link>
      </div>
    </section>
  );
}
