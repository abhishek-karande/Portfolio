
import { Card } from "@/components/ui/card";
import { 
    Cloud, 
    Code2, 
    Database, 
    GitBranch, 
    KeyRound, 
    Leaf, 
    Network, 
    Search,
    Server, 
    Sparkles, 
    Zap
} from "lucide-react";

const skills = [
  { name: "Java", icon: <Code2 className="w-8 h-8 text-accent" /> },
  { name: "Spring Boot", icon: <Leaf className="w-8 h-8 text-accent" /> },
  { name: "Kafka", icon: <GitBranch className="w-8 h-8 text-accent" /> },
  { name: "Distributed Systems", icon: <Network className="w-8 h-8 text-accent" /> },
  { name: "Golang", icon: <Code2 className="w-8 h-8 text-accent" /> },
  { name: "RocksDB", icon: <Database className="w-8 h-8 text-accent" /> },
  { name: "Cloud-native", icon: <Cloud className="w-8 h-8 text-accent" /> },
  { name: "Redis", icon: <Database className="w-8 h-8 text-accent" /> },
  { name: "REST", icon: <Server className="w-8 h-8 text-accent" /> },
  { name: "gRPC", icon: <Server className="w-8 h-8 text-accent" /> },
  { name: "Lucene", icon: <Search className="w-8 h-8 text-accent" /> },
  { name: "OAuth/JWT", icon: <KeyRound className="w-8 h-8 text-accent" /> },
  { name: "Mongo DB", icon: <Database className="w-8 h-8 text-accent" /> },
  { name: "Apache Spark", icon: <Sparkles className="w-8 h-8 text-accent" /> },
  { name: "Vert.x", icon: <Zap className="w-8 h-8 text-accent" /> },
  { name: "Memcached", icon: <Database className="w-8 h-8 text-accent" /> },
];

export function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl">
          Technical Proficiency
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          A collection of technologies and tools I am proficient with, continuously learning and adapting to new advancements.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12">
        {skills.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            {skill.icon}
            <p className="mt-4 font-semibold">{skill.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
