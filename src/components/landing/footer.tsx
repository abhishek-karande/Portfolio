
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-secondary">
            <div className="container flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Abhishek Karande. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="https://github.com/abhishek-karande" target="_blank" aria-label="Github">
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                    <Link href="https://linkedin.com/in/abhishek-karande" target="_blank" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                    <Link href="mailto:abhishek.karande@example.com" aria-label="Email">
                        <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
