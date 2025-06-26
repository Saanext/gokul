import Link from 'next/link';
import { Leaf, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start mb-4">
                <Leaf className="h-8 w-8 text-accent" />
                <span className="ml-2 text-2xl font-headline text-foreground">Nature's Harvest</span>
            </Link>
            <p className="text-foreground/70">Pure Ghee & Forest Honey, from our family to yours.</p>
          </div>
          <div>
            <h3 className="font-headline text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/#products" className="text-foreground/70 hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="/#contact" className="text-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg mb-4 text-foreground">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Facebook />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Twitter />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Nature's Harvest. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
