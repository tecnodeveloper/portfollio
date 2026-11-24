"use client";

import { createElement, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Fade-and-rise on first scroll into view. Fires once — it never replays and
 * never animates on scroll-up.
 *
 * Deliberately hand-rolled on IntersectionObserver plus a CSS transition
 * rather than an animation library: this is the only motion on the site, and a
 * library for it cost ~50 kB of First Load JS, which is most of the page's
 * performance budget for an effect CSS already does.
 *
 * Visitors who prefer reduced motion get the final state immediately. Visitors
 * with no JavaScript get it too, via the <noscript> rule in the layout.
 */
export function Reveal({
	children,
	delay = 0,
	className,
	as = "div",
}: {
	children: React.ReactNode;
	delay?: number;
	className?: string;
	as?: "div" | "li" | "section";
}) {
	const ref = useRef<HTMLElement>(null);
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setShown(true);
					observer.disconnect();
				}
			},
			{ rootMargin: "0px 0px -60px 0px" },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return createElement(
		as,
		{
			ref,
			"data-reveal": "",
			style: { transitionDelay: delay ? `${delay}s` : undefined },
			className: cn(
				"transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
				shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
				className,
			),
		},
		children,
	);
}
