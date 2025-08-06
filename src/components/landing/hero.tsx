
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section id="hero" className="relative w-full bg-secondary">
      <div className="container relative grid lg:grid-cols-2 gap-10 min-h-[calc(100vh-4rem)] items-center py-20">
        <div className="z-10 flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold">
            Abhishek Karande
          </h1>
          <p className="text-primary-foreground text-lg md:text-xl font-medium">
            Backend Software Engineer
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            A passionate Backend Engineer with over 7 years of experience building scalable, distributed systems. I thrive on solving complex problems and building robust, cloud-native applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
            <Button size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Abhishek_Karande_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
            <Link href="https://github.com/abhishek-karande" target="_blank" aria-label="Github">
              <Github className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="https://linkedin.com/in/abhishek-karande" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </Link>
             <Link href="mailto:abhishek.karande@example.com" aria-label="Email">
              <Mail className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-background shadow-lg">
                <AvatarImage src="https://placehold.co/400x400.png" alt="Abhishek Karande" data-ai-hint="man portrait"/>
                <AvatarFallback>AK</AvatarFallback>
            </Avatar>
        </div>
        <a href="#about" aria-label="Scroll down" className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </a>
      </div>
    </section>
  );
}
