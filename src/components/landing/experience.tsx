
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
    {
        title: "Software Engineer 3",
        company: "Tracelink Inc.",
        date: "Aug 2021 - Present",
        description: "Orchestrated Lucene-based indexing and advanced query optimization, reducing query latency by 35%, while building robust, client-facing CRUD APIs powering 99% of TLDB data transactions.\
        Designed the Persistent Storage Manager for automated disaster recovery, delivering rapid failover and minimal downtime. \
  Leveraged Grafana and Prometheus to deliver deep observability across 120+ metrics, slashing incident response times by up to 60%. \
  At WorldView, pioneered efficient data access with implicit and explicit Memcached-based caching (cutting access times by 45%), \
  scalable S3 APIs handling 1M+ daily objects, and secure large-file handling with pre-signed URLs.\
   Demonstrated strong ownership in delivering data reliability, system scalability, and continuous performance enhancements. Mentored junior engineers."
    },
    {
        title: "Software Design Engineer",
        company: "Onlinesales.ai",
        date: "Mar 2021 - Jul 2021",
        description: "developed scalable bulk wallet recharge and package selection features using Python and REST APIs to streamline customer onboarding. Enabled simultaneous onboarding of large numbers of merchants, resulting in exponential reduction of client onboarding time and enhancing operational efficiency for the organization."
    },
    {
        title: "Software Engineer",
        company: "Xoriant Solutions",
        date: "Jul 2018 - Mar 2021",
        description: "Designed and developed middleware solutions for seamless message-based integration between UI and Apache Spark applications, enabling efficient communication across components. Architected scalable Spark-based BI reporting tools supporting CSV, XLSX, PDF, and HTML output, leveraging Apache POI for advanced Excel functionality. Built an internal ETL framework using Spark, Hive, and Spring, enabling regulatory reporting across LATAM regions through SQL-driven configurations. Implemented custom data masking UDFs to enforce field-level confidentiality in Hive tables, ensuring compliance with data privacy standards. Delivered robust data ingestion modules for Hive, Oracle, and various file systems, supporting both incremental and full data loads with integrated validation. Ensured high code quality and reliability through comprehensive automated unit testing using JUnit and Mockito."
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
