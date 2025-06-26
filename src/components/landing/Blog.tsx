import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Golden Elixir: Benefits of Pure Ghee',
    excerpt: 'Discover why ancient cultures revered ghee as a source of health and vitality. From cooking to wellness, learn how to use this liquid gold.',
    image: 'https://placehold.co/600x400.png',
    slug: 'benefits-of-ghee',
    aiHint: 'ghee cooking'
  },
  {
    title: 'Forest Honey: A Sweet Gift from Nature',
    excerpt: 'Explore the unique properties of wild forest honey. Its rich antioxidant profile and complex flavors make it more than just a sweetener.',
    image: 'https://placehold.co/600x400.png',
    slug: 'about-forest-honey',
    aiHint: 'forest honey'
  },
  {
    title: 'Cooking with Ghee and Honey',
    excerpt: 'Unlock new culinary dimensions with our signature products. Find tips and tricks for incorporating them into your daily meals.',
    image: 'https://placehold.co/600x400.png',
    slug: 'cooking-with-ghee-honey',
    aiHint: 'honey drizzle'
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-accent">
            From Our Journal
          </h2>
          <p className="text-lg mt-2 text-foreground/70">
            Insights, stories, and recipes from the heart of nature.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={post.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="font-headline text-xl mb-2">{post.title}</CardTitle>
                <p className="text-foreground/70 flex-grow">{post.excerpt}</p>
                <Button asChild variant="link" className="p-0 h-auto mt-4 self-start text-accent hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
