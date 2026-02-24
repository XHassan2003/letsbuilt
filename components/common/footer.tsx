import { NotebookTabsIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative border-t bg-background/95 backdrop-blur">
      
      {/* Top section */}
      <div className="wrapper py-12 md:py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <NotebookTabsIcon className="size-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">
              Lets<span className="text-primary">Built</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            A community where developers share projects, discover ideas, and
            build the future together.
          </p>
        </div>

        {/* Explore */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/explore" className="hover:text-foreground transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Categories
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Trending
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-foreground transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Start Building</h3>
          <p className="text-sm text-muted-foreground">
            Got something awesome? Share it with the community
          </p>

          <Button asChild size="sm" className="w-full sm:w-auto shadow-md">
            <Link href="/submit">
              <SparklesIcon className="size-4" />
              Share Your Project
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="wrapper py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
          
          <p className="text-center md:text-left">
            © 2026 LetsBuilt. All rights reserved.
          </p>

          <div className="flex justify-center md:justify-end items-center gap-5 flex-wrap">
            <Link href="#" className="hover:text-foreground transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              Twitter
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}