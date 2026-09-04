import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Linkedin, Mail } from "lucide-react";

import { cn } from "@/lib/utils";

import headshot from "@/assets/headshot.jpg";
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
import { InquiryForm } from "@/components/site/InquiryForm";
import { resultGroups, reviews, toolCategories } from "@/components/site/data";

export const Route = createFileRoute("/")({
  component: Index,
});

function SectionLabel({ children, className }: { children: string; className?: string }) {
  return <p className={cn("eyebrow text-secondary", className)}>{children}</p>;
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-display text-base font-semibold tracking-tight">
            SEVN <span className="text-primary">Consulting Group</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#results" className="transition-colors hover:text-foreground">
              Results
            </a>
            <a href="#reviews" className="transition-colors hover:text-foreground">
              Reviews
            </a>
            <a href="#connect" className="transition-colors hover:text-foreground">
              Connect
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
            <SectionLabel className="text-secondary">Operations Support</SectionLabel>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">
              Your strategy is solid.
              <br />
              <span className="text-secondary">Execution is the problem.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/80">
              I turn messy processes and vendor stacks into predictable systems — so your team can
              execute without you having to hold it all together.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-md">
                <a href="#connect">
                  Book a consultation
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
          <div className="mx-auto grid max-w-5xl gap-14 px-6 py-24 md:grid-cols-[320px_1fr]">
            <div>
              <div className="overflow-hidden rounded-xl bg-muted shadow-[var(--shadow-card)]">
                <img
                  src={headshot}
                  alt="Portrait of the founder of SEVN Consulting Group"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-opacity hover:opacity-70"
              >
                <Linkedin className="size-4" /> Connect on LinkedIn
              </a>
            </div>

            <div>
              <SectionLabel className="text-secondary">About Me</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Give me a mess and I'll turn it into a system.
              </h2>
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
                    Finance, HR, whatever's on fire this week — I find the shape of the problem and
                    build the process that keeps it solved.
                  </>,
                ].map((line, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2.5 h-px w-6 shrink-0 bg-secondary" aria-hidden />
                    <p className="text-base leading-relaxed text-foreground/85">{line}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-12 rounded-xl bg-card p-7 shadow-[var(--shadow-card)]">
                <h3 className="text-lg">Tools & Systems Fluency</h3>
                <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                  {toolCategories.map((cat) => (
                    <div key={cat.label}>
                      <dt className="eyebrow text-secondary">{cat.label}</dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {cat.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                          >
                            {tool}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <SectionLabel className="text-red">Measurable Results</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
              The receipts, grouped by the kind of problem.
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-red" aria-hidden />

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { value: "~$100K", label: "monthly savings delivered", color: "text-primary" },
                { value: "85%+", label: "OKR completion, four quarters running", color: "text-secondary" },
                { value: "$273K", label: "sponsorship revenue systematized", color: "text-red" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-card p-6 shadow-[var(--shadow-card)]">
                  <p className={cn("font-display text-3xl font-semibold", stat.color)}>{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Accordion
              type="single"
              collapsible
              defaultValue="revenue"
              className="mt-12 overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)]"
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
          <div className="mx-auto max-w-5xl px-6 py-24">
            <SectionLabel className="text-secondary">Reviews</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl">What it's like to work together.</h2>

            <Carousel opts={{ align: "start" }} className="mt-12">
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
                <CarouselPrevious className="static translate-y-0 border-border bg-card" />
                <CarouselNext className="static translate-y-0 border-border bg-card" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Connect */}
        <section id="connect">
          <div className="mx-auto grid max-w-5xl gap-14 px-6 py-24 md:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionLabel className="text-primary">Let's Connect</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Whether you know what you're looking for, or are still figuring it out.
              </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-primary" aria-hidden />
              <p className="mt-6 text-base leading-relaxed text-foreground/80">
                Tell me what's not working. If I'm not the right fit, I'll say so and point you
                somewhere better.
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
          <p>SEVN Consulting Group</p>
          <p>Operations support for teams that need the systems to hold.</p>
        </div>
      </footer>
    </div>
  );
}
