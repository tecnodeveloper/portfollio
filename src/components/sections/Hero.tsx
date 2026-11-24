import { ArrowDown, Mail } from "lucide-react";

import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SocialRow } from "@/components/ui/SocialRow";

export function Hero() {
	const { hero } = site;

	return (
		<section
			id="home"
			aria-labelledby="hero-heading"
			className="hero-glow relative flex min-h-svh items-center pt-24 pb-16"
		>
			<Container className="relative">
				<Reveal>
					<p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.2em] text-subtle uppercase">
						{site.available && (
							<span className="relative flex size-2">
								<span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
								<span className="relative inline-flex size-2 rounded-full bg-accent" />
							</span>
						)}
						{hero.eyebrow}
						<span className="text-border-hover">·</span>
						{site.location}
					</p>
				</Reveal>

				<Reveal delay={0.06}>
					<h1
						id="hero-heading"
						className="mt-6 text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-[-0.03em]"
					>
						{hero.headlineLead}{" "}
						<span className="text-accent">{hero.headlineAccent}</span>
					</h1>
				</Reveal>

				<Reveal delay={0.12}>
					<p className="mt-3 text-[clamp(1.125rem,2.5vw,1.5rem)] font-medium tracking-[-0.01em] text-muted">
						{hero.tagline}
					</p>
				</Reveal>

				<Reveal delay={0.18}>
					<p className="mt-6 max-w-xl text-base text-muted sm:text-[1.0625rem]">
						{hero.blurb}
					</p>
				</Reveal>

				<Reveal delay={0.24}>
					<div className="mt-9 flex flex-wrap items-center gap-3">
						<ButtonLink href="#projects">View work</ButtonLink>
						<ButtonLink href={site.resumeUrl} variant="secondary" download>
							Download résumé
						</ButtonLink>
						<ButtonLink href={`mailto:${site.email}`} variant="ghost">
							<Mail className="size-4" aria-hidden="true" />
							Email me
						</ButtonLink>
					</div>
				</Reveal>

				<Reveal delay={0.3}>
					<SocialRow className="mt-10" />
				</Reveal>
			</Container>

			<a
				href="#about"
				aria-label="Scroll to about"
				className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-subtle transition-colors hover:text-accent sm:block"
			>
				<ArrowDown className="size-5 animate-bounce" aria-hidden="true" />
			</a>
		</section>
	);
}
