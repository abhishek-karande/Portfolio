
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
        <div className="lg:col-span-2">
          <h2 className="font-headline text-3xl md:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            I'm a seasoned Backend Engineer based in Pune, India, with over 7 years of hands-on experience in designing, developing, and maintaining high-performance, scalable, and distributed systems.
          </p>
          <p className="mt-4 text-muted-foreground text-lg">
            My expertise lies in Java and Golang, with a strong command over frameworks like Spring Boot and Vert.x. I'm passionate about building cloud-native solutions and have extensive experience with microservices architecture, containerization, and various database technologies, both SQL and NoSQL. I value clean code, robust architecture, and collaborative teamwork.
          </p>
           <p className="mt-4 text-muted-foreground text-lg">
            I'm actively seeking full-time backend engineering roles in India or abroad (relocation-friendly) where I can contribute to challenging projects and continue to grow as an engineer.
          </p>
        </div>
        <div className="relative">
            <Card className="p-2 shadow-lg">
                <Image
                    src="/abhishek-on-laptop.jpg"
                    alt="Abhishek working on a laptop"
                    width={850}
                    height={750}
                    className="rounded-md object-cover"
                    data-ai-hint="man programming"
                />
            </Card>
        </div>
      </div>
    </section>
  );
}
