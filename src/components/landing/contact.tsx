"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});



export function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          I'm open to new opportunities and collaborations. Feel free to reach out.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold font-headline">Contact Information</h3>
            <p className="text-muted-foreground">
                You can reach me via email or connect with me on social media. I'm always happy to chat about technology, projects, or potential opportunities.
            </p>
            <div className="flex flex-col gap-4">
                 <Link href="mailto:akarande70@gmail.com" className="flex items-center gap-3 group">
                    <Mail className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground">akarande70@gmail.com</span>
                 </Link>
                 <Link href="https://linkedin.com/in/abhishek-karande" target="_blank" className="flex items-center gap-3 group">
                    <Linkedin className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground">linkedin.com/in/abhishek-karande</span>
                 </Link>
                 <Link href="https://github.com/abhishek-karande" target="_blank" className="flex items-center gap-3 group">
                    <Github className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground">github.com/abhishek-karande</span>
                 </Link>
            </div>
             <p className="text-muted-foreground mt-4">
                <strong>Location:</strong> Pune, India
            </p>
        </div>
      </div>
    </section>
  );
}