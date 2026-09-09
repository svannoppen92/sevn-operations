import { useState, type MouseEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Linkedin, Mail, Menu } from "lucide-react";
 
import { cn } from "@/lib/utils";
 
import headshotImage from "@/assets/headshot.jpg";
import sevnLogo from "@/assets/sevn-logo.png";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { InquiryForm } from "@/components/site/InquiryForm";
import { resultGroups, reviews } from "@/components/site/data";
 
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#results", label: "Results" },
  { href: "#reviews", label: "Reviews" },
  { href: "#connect", label: "Connect" },
] as const;
 
export const Route = createFileRoute("/")({
  component: Index,
});
 
function SectionLabel({ children, className }: { children: string; className?: string }) {
  return <p className={cn("eyebrow text-secondary", className)}>{children}</p>;
}
 
function Index() {
  const [navOpen, setNavOpen] = useState(false);
 
  // The mobile nav lives in a Sheet, which locks page scroll while it's open
  // and while it plays its close animation. If we let the anchor's native
  // hash-jump fire in that instant, the browser tries to scroll while
  // scrolling is locked and the jump is silently dropped. So: intercept the
  // click, close the sheet, then scroll to the target ourselves once the
  // close animation (300ms) has finished.
  function handleMobileNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setNavOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }
 
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="#top" className="shrink-0">
            <img src={sevnLogo} alt="SEVN Operations" className="h-7 w-auto sm:h-8" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
 
          <Sheet open={navOpen} onOpenChange={setNavOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="sm:hidden"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:hidden">
              <SheetTitle className="sr-only">SEVN Operations</SheetTitle>
              <img src={sevnLogo} alt="SEVN Operations" className="h-6 w-auto" />
              <nav className="mt-8 flex flex-col gap-1 text-base">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleMobileNavClick(event, link.href)}
                    className="rounded-md px-2 py-3 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
 
      <main id="top">
        {/* Hero */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <SectionLabel className="text-primary">Operations Support</SectionLabel>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-secondary sm:text-6xl">
              Your vision is solid.
              <br />
              Execution is the problem.
            </h1>
            <div className="mt-5 h-1 w-16 rounded-full bg-red" aria-hidden />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/80">
              I turn messy processes and vendor stacks into predictable systems — so your team can
              execute without you having to hold it all together.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-md">
                <a href="#connect">
                  Let me help you
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-foreground"
              >
                <ArrowDown className="size-4 text-secondary" /> 12+ years of operations
              </a>
            </div>
          </div>
        </section>
 
        {/* About */}
        <section id="about">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[320px_1fr]">
            <div>
              <div className="overflow-hidden rounded-xl bg-muted shadow-[var(--shadow-card)]">
                <img
                  src={headshotImage}
                  alt="Portrait of the founder of SEVN Consulting Group"
                  width={389}
                  height={389}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <a
                href="https://www.linkedin.com/in/sophievtaylor"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-opacity hover:opacity-70"
              >
                <Linkedin className="size-4" /> Connect on LinkedIn
              </a>
            </div>
 
            <div>
              <SectionLabel className="text-primary">About Me</SectionLabel>
              <h2 className="mt-4 text-3xl text-secondary sm:text-4xl">
                Give me a mess and I'll turn it into a system.
              </h2>
              <div className="mt-5 h-1 w-16 rounded-full bg-red" aria-hidden />
              <ul className="mt-8 space-y-6">
                {[
                  <>
                    Operations leader with 12+ years of experience — COO, Chief of Staff, Head of
                    Ops. It's <strong className="font-semibold">the work that matters to me</strong>
                    , not the title.
                  </>,
                  <>
                    I've built the systems that hold a company together — across Fortune 500
                    companies, early-stage startups, and nonprofits.
                  </>,
                  <>
                    Finance, HR, whatever's on fire this week — I find the problems and
                    build the process that keeps it solved.
                  </>,
                ].map((line, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2.5 h-px w-6 shrink-0 bg-secondary" aria-hidden />
                    <p className="text-base leading-relaxed text-foreground/85">{line}</p>
                  </li>
                ))}
              </ul>
 
            </div>
          </div>
        </section>
 
        {/* Results */}
        <section id="results">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <SectionLabel className="text-primary">Measurable Results</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl text-secondary sm:text-4xl">
              Examples of what I can do for you.
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-red" aria-hidden />
 
 
            <Accordion
              type="single"
              collapsible
              defaultValue="revenue"
              className="mt-10 overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)]"
            >
              {resultGroups.map((group) => (
                <AccordionItem
                  key={group.id}
                  value={group.id}
                  className="border-b border-border px-6 last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">
                    {group.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <ul className="space-y-4 pr-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-4">
                          <span
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-red"
                            aria-hidden
                          />
                          <span className="text-sm leading-relaxed text-foreground/85">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
 
        {/* Reviews */}
        <section id="reviews">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <SectionLabel className="text-primary">Reviews</SectionLabel>
            <h2 className="mt-4 text-3xl text-secondary sm:text-4xl">What it's like to work together.</h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-red" aria-hidden />
 
            <Carousel opts={{ align: "start" }} className="mt-10">
              <CarouselContent className="-ml-5">
                {reviews.map((review, i) => (
                  <CarouselItem key={i} className="pl-5 sm:basis-1/2">
                    <figure className="flex h-full flex-col justify-between rounded-xl bg-card p-7 shadow-[var(--shadow-card)]">
                      <blockquote className="text-base leading-relaxed text-foreground/85">
                        <span className="font-display text-3xl leading-none text-red">“</span>
                        {review.quote}
                      </blockquote>
                      <figcaption className="mt-7 border-t border-border pt-5">
                        <p className="font-display text-sm font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="static h-11 w-11 translate-y-0 border-border bg-card" />
                <CarouselNext className="static h-11 w-11 translate-y-0 border-border bg-card" />
              </div>
            </Carousel>
          </div>
        </section>
 
        {/* Connect */}
        <section id="connect">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionLabel className="text-primary">Let's Connect</SectionLabel>
              <h2 className="mt-4 text-3xl text-secondary sm:text-4xl">
                And talk through the problems you need solved.
              </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-red" aria-hidden />
              <p className="mt-6 text-base leading-relaxed text-foreground/80">
                I'll be in touch within 24 hours. Pricing options are based on the project scope and time requirements.
              </p>
              <a
                href="mailto:you@yourdomain.com"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-opacity hover:opacity-70"
              >
                <Mail className="size-4" /> you@yourdomain.com
              </a>
            </div>
            <div className="rounded-xl bg-card p-7 shadow-[var(--shadow-card)] sm:p-9">
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>
 
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground">
          <img src={sevnLogo} alt="SEVN Operations" className="h-5 w-auto" />
          <p>Operations support for teams that need the systems to hold.</p>
        </div>
      </footer>
    </div>
  );
}
 
 
