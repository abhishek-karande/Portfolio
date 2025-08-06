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

function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // In a real app, you'd send this to a server
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Contact Form</CardTitle>
        <CardDescription>
          Alternatively, drop me a message using the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your message..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function ClientOnlyContactForm() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? <ContactForm /> : null;
}

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
                 <Link href="mailto:abhishek.karande@example.com" className="flex items-center gap-3 group">
                    <Mail className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground">abhishek.karande@example.com</span>
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
        <ClientOnlyContactForm />
      </div>
    </section>
  );
}