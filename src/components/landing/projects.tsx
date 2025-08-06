
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Distributed Task Scheduler",
    description: "A high-throughput, fault-tolerant task scheduling system built with Kafka and Spring Boot, capable of managing millions of jobs.",
    image: "/project-1-stack-blue.png",
    imageHint: "abstract network",
    tags: ["Java", "Spring Boot", "Kafka", "Redis"],
    github: "https://github.com/abhishek-karande/task-scheduler",
  },
  {
    title: "Real-time Search API",
    description: "A Go-based microservice providing a low-latency search API using Lucene for indexing and gRPC for communication.",
    image: "/project-2-stack.png",
    imageHint: "code lines",
    tags: ["Golang", "gRPC", "Lucene", "Docker"],
    github: "https://github.com/abhishek-karande/search-api",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Here are some of my side projects and contributions that showcase my skills and passion for backend development.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={project.imageHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-1">
              <CardTitle className="mb-2 font-headline text-xl">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 my-4">
                {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">{project.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href="#projects" target="_blank">
                  <Github className="mr-2 h-4 w-4" /> Coming soon, work in progress!
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
