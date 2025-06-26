'use client';

import Link from 'next/link';
import { Leaf, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

const navLinks = [
    { href: '/#products', label: 'Products' },
    { href: '/#contact', label: 'Contact' },
];

export function Header({ initialSearchTerm = '' }: { initialSearchTerm?: string }) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

    const handleSearchSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/?search=${encodeURIComponent(searchTerm)}`);
        } else {
            router.push(`/`);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 flex items-center justify-between h-20">
                <Link href="/" className="flex items-center gap-2">
                    <Leaf className="h-8 w-8 text-accent" />
                    <span className="text-2xl font-headline font-bold text-foreground">Gokul Diary</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className="font-headline text-lg text-foreground/80 hover:text-accent transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <form onSubmit={handleSearchSubmit} className="relative">
                        <Input 
                            type="search" 
                            placeholder="Search products..." 
                            className="pr-10 w-48" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button type="submit" variant="ghost" size="icon" className="absolute top-0 right-0 h-full w-10">
                            <Search className="h-5 w-5 text-muted-foreground" />
                        </Button>
                    </form>
                </div>
                
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-center p-4 border-b">
                                    <Link href="/" className="flex items-center gap-2">
                                        <Leaf className="h-6 w-6 text-accent" />
                                        <span className="text-xl font-headline font-bold text-foreground">Gokul Diary</span>
                                    </Link>
                                    <SheetClose asChild>
                                      <Button variant="ghost" size="icon">
                                        <X className="h-6 w-6" />
                                      </Button>
                                    </SheetClose>
                                </div>
                                <nav className="flex flex-col p-4 space-y-4">
                                    {navLinks.map(link => (
                                      <SheetClose key={link.href} asChild>
                                        <Link href={link.href} className="font-headline text-xl text-foreground/80 hover:text-accent transition-colors py-2">
                                            {link.label}
                                        </Link>
                                      </SheetClose>
                                    ))}
                                </nav>
                                <div className="mt-auto p-4 border-t">
                                     <form onSubmit={handleSearchSubmit}>
                                        <div className="relative">
                                            <Input 
                                                type="search" 
                                                placeholder="Search products..." 
                                                className="pr-10" 
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                             <Button type="submit" variant="ghost" size="icon" className="absolute top-0 right-0 h-full w-10">
                                                <Search className="h-5 w-5 text-muted-foreground" />
                                             </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
