import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Products } from '@/components/landing/Products';
import { RecipeCallout } from '@/components/landing/RecipeCallout';
import { Testimonials } from '@/components/landing/Testimonials';
import { Blog } from '@/components/landing/Blog';
import { Contact } from '@/components/landing/Contact';

export default function Home({ searchParams }: { searchParams?: { search?: string } }) {
  const searchQuery = searchParams?.search || '';

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products searchQuery={searchQuery} />
        <RecipeCallout />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
