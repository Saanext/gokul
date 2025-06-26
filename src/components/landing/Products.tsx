'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const products = [
  {
    id: 'ghee-01',
    name: 'Pure Desi Ghee',
    description: 'Traditionally churned from the milk of grass-fed cows, our ghee is rich in flavor and nutrients.',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnaGVlfGVufDB8fHx8MTc1MDgyNzA1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'ghee jar',
    tags: ['Best Seller', 'Organic'],
    nutrition: {
        servingSize: '1 tbsp (14g)',
        calories: '120',
        totalFat: '14g',
        saturatedFat: '9g',
    }
  },
  {
    id: 'honey-01',
    name: 'Wild Forest Honey',
    description: 'Raw and unfiltered honey sourced from the nectar of wildflowers in dense forests. A true taste of nature.',
    price: '$15.99',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxob25leXxlbnwwfHx8fDE3NTA5Mzk5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'honey jar',
    tags: ['Raw', 'Natural'],
     nutrition: {
        servingSize: '1 tbsp (21g)',
        calories: '60',
        totalCarbs: '17g',
        sugars: '16g',
    }
  },
];

export function Products({ searchQuery }: { searchQuery: string }) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section id="products" className="py-16 sm:py-24 bg-primary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-accent">
            Our Prized Collection
          </h2>
          <p className="text-lg mt-2 text-foreground/70">
            Crafted with care, delivered with love.
          </p>
        </div>
        
        {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms`}}>
                <Dialog>
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
                      <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={product.aiHint}
                      />
                    </div>
                    <div className="flex flex-col p-6 w-full sm:w-1/2">
                      <CardHeader className="p-0">
                        <div className="flex gap-2 mb-2">
                          {product.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                        <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                        <CardDescription className="pt-2">{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 flex-grow mt-4">
                        <p className="text-2xl font-bold text-accent">{product.price}</p>
                      </CardContent>
                      <CardFooter className="p-0 pt-4 flex gap-2">
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-headline">Add to Cart</Button>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">Details</Button>
                        </DialogTrigger>
                      </CardFooter>
                    </div>
                  </Card>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="font-headline text-2xl text-accent">{product.name}</DialogTitle>
                      <DialogDescription>
                        {product.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <h4 className="font-bold mb-2 font-headline">Nutritional Information</h4>
                      <ul className="text-sm text-foreground/80 list-disc list-inside">
                          <li>Serving Size: {product.nutrition.servingSize}</li>
                          <li>Calories: {product.nutrition.calories}</li>
                          {product.nutrition.totalFat && <li>Total Fat: {product.nutrition.totalFat}</li>}
                          {product.nutrition.saturatedFat && <li>Saturated Fat: {product.nutrition.saturatedFat}</li>}
                          {product.nutrition.totalCarbs && <li>Total Carbs: {product.nutrition.totalCarbs}</li>}
                          {product.nutrition.sugars && <li>Sugars: {product.nutrition.sugars}</li>}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
            </div>
        ) : (
            <div className="text-center text-foreground/70">
                <p>No products found for &quot;{searchQuery}&quot;.</p>
                <p>Check out our full collection!</p>
            </div>
        )}

      </div>
    </section>
  );
}
