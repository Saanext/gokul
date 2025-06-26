import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/13428113/pexels-photo-13428113.jpeg"
          alt="Lush fields representing nature's harvest"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
          data-ai-hint="farm harvest"
        />
      </div>
      <div className="relative container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline mb-4 drop-shadow-lg opacity-0 animate-fade-in-up">
          Gokul Diary
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto font-body mb-8 drop-shadow-md opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Experience the pure essence of nature with our artisanal ghee and forest honey.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="font-headline bg-primary text-primary-foreground hover:bg-primary/90 text-lg w-full sm:w-auto">
            <Link href="#products">Shop Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-headline bg-transparent text-white border-white hover:bg-white hover:text-black text-lg w-full sm:w-auto">
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <Link href="#about" aria-label="Scroll down">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white animate-bounce">
            <ArrowDown size={20} />
          </div>
        </Link>
      </div>
    </section>
  );
}
