import { NotebookTabsIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Footer() {
  return (
    <footer className="relative border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      
      {/* Top section */}
      <div className="wrapper py-16 grid gap-12 md:grid-cols-4">
        
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

          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            A community where developers share projects, discover ideas, and
            build the future together.
          </p>
        </div>

        {/* Explore */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/explore" className="hover:text-foreground transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition">
                Trending
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-foreground transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* CTA (matches hero buttons) */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Start Building</h3>
          <p className="text-sm text-muted-foreground">
            Got something awesome? Share it with the community
          </p>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="text-base px-5 shadow-lg">
              <Link href="/submit">
                <SparklesIcon />
                Share Your Project
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="wrapper py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
          
          <p>
            © 2026 LetsBuilt. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground transition">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition">
              Twitter
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
