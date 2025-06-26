import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Sarah L.',
    avatar: 'SL',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'happy woman',
    title: 'Chef & Food Blogger',
    quote: "The richness of Nature's Harvest ghee is unparalleled. It has completely transformed my cooking, adding a depth of flavor I didn't know was possible.",
  },
  {
    name: 'David M.',
    avatar: 'DM',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'smiling man',
    title: 'Health Enthusiast',
    quote: 'I use their forest honey in my tea every morning. It\'s pure, delicious, and I love that it\'s raw and packed with natural benefits. Highly recommend!',
  },
  {
    name: 'Priya K.',
    avatar: 'PK',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'woman portrait',
    title: 'Home Baker',
    quote: "I've tried many brands, but this is the best ghee for baking. It gives my cakes and cookies a wonderful aroma and a perfectly moist texture.",
  },
];


export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-primary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-accent">
            Words From Our Community
          </h2>
          <p className="text-lg mt-2 text-foreground/70">
            See what our happy customers have to say.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full flex flex-col justify-between p-6 shadow-lg">
                    <CardContent className="p-0">
                      <p className="italic text-foreground/80 mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-bold font-headline">{testimonial.name}</p>
                          <p className="text-sm text-foreground/70">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
