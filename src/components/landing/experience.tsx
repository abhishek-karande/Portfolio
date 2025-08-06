
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
    {
        title: "Senior Backend Engineer",
        company: "Tech Solutions Inc.",
        date: "Jan 2020 - Present",
        description: "Led the design and development of a new microservices-based platform using Spring Boot and Kafka. Improved system performance by 30% through query optimization and caching strategies with Redis. Mentored junior engineers."
    },
    {
        title: "Software Engineer",
        company: "Innovate Corp.",
        date: "Jun 2017 - Dec 2019",
        description: "Developed and maintained RESTful APIs for a high-traffic e-commerce application. Worked on integrating third-party payment gateways and implemented robust security measures using OAuth2 and JWT."
    },
    {
        title: "Associate Software Engineer",
        company: "Code Crafters",
        date: "Jul 2015 - May 2017",
        description: "Contributed to building a monolith-to-microservices migration project. Wrote unit and integration tests to ensure code quality and reliability. Gained experience with CI/CD pipelines and agile methodologies."
    }
];

export function Experience() {
    return (
        <section id="experience" className="container py-24 sm:py-32 bg-secondary rounded-lg">
            <div className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl">
                    Work Experience
                </h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                    My professional journey as a backend engineer.
                </p>
            </div>
            <div className="relative mt-12 grid gap-10">
                {experienceData.map((exp, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 shrink-0">
                                <Briefcase className="h-6 w-6 text-primary-foreground" />
                            </div>
                            {index < experienceData.length - 1 && <div className="h-full w-px bg-border my-2" />}
                        </div>
                        <div className="flex-1 pt-1">
                            <Card className="shadow-md">
                                <CardHeader>
                                    <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
                                    <CardDescription>{exp.company} | {exp.date}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
