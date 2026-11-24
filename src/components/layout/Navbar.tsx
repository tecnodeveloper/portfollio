"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { navLinks as links } from "@/lib/nav";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view so the nav can mark it.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Escape closes the panel, Tab stays inside it, and the body stops scrolling.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-200",
          scrolled
            ? "border-b border-border bg-bg/90 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <Container>
          <nav
            aria-label="Main"
            className="flex h-16 items-center justify-between"
          >
            <a
              href="#home"
              className="font-mono text-sm font-medium tracking-[-0.02em] text-fg"
            >
              zain<span className="text-accent">ali</span>
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {links.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm transition-colors duration-150",
                        isActive
                          ? "font-medium text-accent"
                          : "text-muted hover:text-fg",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="ml-2">
                <a
                  href={site.resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-fg transition-all duration-150 hover:border-accent-dim hover:text-accent"
                >
                  <Download className="size-3.5" aria-hidden="true" />
                  Résumé
                </a>
              </li>
            </ul>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="rounded-md p-2 text-fg md:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Deliberately a sibling of <header>, not a child: the header's
			    backdrop-filter makes it the containing block for fixed descendants,
			    which collapsed this panel to zero height once the page was scrolled. */}
      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="fixed inset-0 top-16 z-40 bg-bg md:hidden"
        >
          <nav aria-label="Mobile">
            <Container>
              <ul className="flex flex-col gap-1 py-6">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={close}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-lg transition-colors",
                        active === link.id
                          ? "font-medium text-accent"
                          : "text-muted",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-4">
                  <a
                    href={site.resumeUrl}
                    download
                    onClick={close}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-fg"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Download résumé
                  </a>
                </li>
              </ul>
            </Container>
          </nav>
        </div>
      )}
    </>
  );
}
