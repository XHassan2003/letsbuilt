"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  CompassIcon,
  HomeIcon,
  LoaderIcon,
  MenuIcon,
  SparkleIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";
import { Button } from "../ui/button";
import CustomUserButton from "./custom-user-button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        <span className="text-primary">Lets</span>Built
      </span>
    </Link>
  );
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="wrapper px-4 md:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              <HomeIcon className="size-4" />
              Home
            </Link>

            <Link
              href="/explore"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              <CompassIcon className="size-4" />
              Explore
            </Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <Suspense fallback={<LoaderIcon className="size-4 animate-spin" />}>
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <Button size="sm">Sign Up</Button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <Button asChild size="sm">
                  <Link href="/submit">
                    <SparklesIcon className="size-4" />
                    Submit
                  </Link>
                </Button>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground"></span>
                  <CustomUserButton />
                </div>
              </SignedIn>
            </Suspense>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              <HomeIcon className="size-4" />
              Home
            </Link>

            <Link
              href="/explore"
              className="flex items-center gap-2 px-3 py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              <CompassIcon className="size-4" />
              Explore
            </Link>

            <div className="pt-3 border-t">
              <Suspense
                fallback={<LoaderIcon className="size-4 animate-spin" />}
              >
                <SignedOut>
                  <div className="flex flex-col gap-2">
                    <SignInButton />
                    <SignUpButton>
                      <Button className="w-full">Sign Up</Button>
                    </SignUpButton>
                  </div>
                </SignedOut>

                <SignedIn>
                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full">
                      <Link href="/submit">
                        <SparklesIcon className="size-4" />
                        Submit Project
                      </Link>
                    </Button>

                    <CustomUserButton />
                  </div>
                </SignedIn>
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
