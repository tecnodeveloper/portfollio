import { ArrowUp, ArrowUpRight, Download } from "lucide-react";

import { site } from "@/content/site";
import { navLinks } from "@/lib/nav";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const linkClass =
	"inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 hover:text-accent";

function ColumnLabel({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="font-mono text-xs font-medium tracking-[0.15em] text-subtle uppercase">
			{children}
		</h3>
	);
}

/**
 * Closing block — contact and footer in one, so the page ends on a statement
 * rather than trailing off through a thin section into a thinner footer.
 *
 * Laid out on a 12-column grid with three 4-column rails. The intro, the link
 * columns and the baseline bar all snap to those same rails, so the block reads
 * as one composed unit instead of a stack of unrelated left/right rows.
 *
 * The oversized "Let's talk" is the whole point: set just above the page
 * background so it reads as texture, and lighting up in accent on hover. It is
 * the mailto, so the largest thing on the page is also the thing to click.
 */
export function Contact() {
	const socials = site.socials.filter(
		(s) => s.href && !s.href.startsWith("mailto:"),
	);
	const sections = navLinks.filter((link) => link.id !== "contact");

	return (
		<footer
			id="contact"
			aria-labelledby="contact-heading"
			className="border-t border-border pt-16 pb-12 sm:pt-24"
		>
			<Container>
				{/* Row 1 — intro on the left rail, status on the right. */}
				<Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
					<div className="lg:col-span-7">
						<p className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">
							{site.contact.eyebrow}
						</p>
						<p className="mt-3 max-w-lg text-sm text-muted">
							{site.contact.blurb}
						</p>
					</div>

					<div className="lg:col-span-4 lg:col-start-9 lg:text-right">
						<ColumnLabel>Status</ColumnLabel>
						<p className="mt-3 flex items-center gap-2 text-sm text-fg lg:justify-end">
							{site.available && (
								<span className="relative flex size-2">
									<span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
									<span className="relative inline-flex size-2 rounded-full bg-accent" />
								</span>
							)}
							Available for work
						</p>
						<p className="mt-1 text-sm text-subtle">{site.location}</p>
					</div>
				</Reveal>

				{/* Row 2 — the headline, spanning the full width. */}
				<Reveal delay={0.06}>
					<h2 id="contact-heading" className="mt-12 sm:mt-16">
						<a
							href={`mailto:${site.email}`}
							className="group block"
							aria-label={`${site.contact.heading} — email ${site.email}`}
						>
							{/* Drawn as SVG text rather than sized in vw: textLength
							    makes it span the container exactly at every width, so it
							    always fills the line and can never overflow the page. */}
							<svg
								viewBox="0 0 1000 215"
								className="w-full"
								aria-hidden="true"
								focusable="false"
							>
								<text
									x="0"
									y="172"
									textLength="1000"
									lengthAdjust="spacing"
									fontSize="200"
									fontWeight="600"
									className="fill-ghost font-sans transition-[fill] duration-300 group-hover:fill-accent"
								>
									{site.contact.heading}
								</text>
							</svg>
						</a>
					</h2>
				</Reveal>

				{/* Row 3 — three link columns on the same rails. */}
				<Reveal
					delay={0.12}
					className="mt-14 grid gap-y-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8"
				>
					<div className="lg:col-span-4">
						<ColumnLabel>Contact</ColumnLabel>
						<ul className="mt-4 space-y-2.5">
							<li>
								<a
									href={`mailto:${site.email}`}
									className="font-mono text-sm text-accent underline-offset-4 transition-all hover:underline"
								>
									{site.email}
								</a>
							</li>
							<li>
								<a href={site.resumeUrl} download className={linkClass}>
									<Download className="size-3.5" aria-hidden="true" />
									Download résumé
								</a>
							</li>
						</ul>
					</div>

					<div className="lg:col-span-4">
						<ColumnLabel>Elsewhere</ColumnLabel>
						<ul className="mt-4 space-y-2.5">
							{socials.map((social) => (
								<li key={social.label}>
									<a
										href={social.href}
										target="_blank"
										rel="noreferrer"
										className={linkClass}
									>
										{social.label}
										<ArrowUpRight className="size-3.5" aria-hidden="true" />
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="lg:col-span-4">
						<ColumnLabel>Sections</ColumnLabel>
						<ul className="mt-4 space-y-2.5">
							{sections.map((link) => (
								<li key={link.id}>
									<a href={`#${link.id}`} className={linkClass}>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</Reveal>

				{/* Row 4 — baseline bar, aligned to the same three rails. */}
				<div className="mt-14 grid grid-cols-2 items-center gap-4 border-t border-border pt-8 lg:grid-cols-12 lg:gap-x-8">
					<p className="font-mono text-xs text-subtle lg:col-span-4">
						© {new Date().getFullYear()} {site.name}
					</p>

					<a
						href="#home"
						className="group flex items-center gap-3 justify-self-end rounded-full lg:order-3 lg:col-span-4"
						aria-label="Back to top"
					>
						<span className="hidden font-mono text-xs tracking-[0.15em] text-muted uppercase transition-colors duration-150 group-hover:text-fg sm:inline">
							Back to top
						</span>
						<span className="flex size-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-150 group-hover:-translate-y-0.5 group-hover:border-accent-dim group-hover:text-accent">
							<ArrowUp className="size-4" aria-hidden="true" />
						</span>
					</a>

					<p className="col-span-2 font-mono text-xs text-subtle lg:order-2 lg:col-span-4 lg:text-center">
						Built with Next.js &amp; Tailwind CSS
					</p>
				</div>
			</Container>
		</footer>
	);
}
