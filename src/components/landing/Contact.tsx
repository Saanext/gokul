import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-primary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline text-accent">
              Get In Touch
            </h2>
            <p className="text-lg mt-2 text-foreground/70">
              Have questions or suggestions? We'd love to hear from you.
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-headline">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-headline">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="font-headline">Message</Label>
              <Textarea id="message" placeholder="Your Message" rows={6} />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-headline px-12">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
