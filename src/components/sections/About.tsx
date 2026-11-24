import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
	const { about } = site;

	return (
		<Section id="about" index="01" label="About" heading="Who I am">
			<div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
				<div className="lg:col-span-3">
					{about.paragraphs.map((paragraph, i) => (
						<Reveal key={i} delay={i * 0.06}>
							<p className="mb-5 text-base text-muted sm:text-[1.0625rem]">
								{paragraph}
							</p>
						</Reveal>
					))}
				</div>

				{/* Stats sit in their own column so the text block doesn't run the
				    full width of the page now that there is no portrait beside it. */}
				<Reveal delay={0.12} className="lg:col-span-2">
					<dl className="grid grid-cols-3 gap-6 border-t border-border pt-8 lg:grid-cols-1 lg:gap-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
						{about.stats.map((stat) => (
							<div key={stat.label}>
								<dt className="sr-only">{stat.label}</dt>
								<dd>
									<span className="block font-mono text-2xl font-semibold text-accent sm:text-3xl">
										{stat.value}
									</span>
									<span
										aria-hidden="true"
										className="mt-1 block text-xs leading-snug text-subtle"
									>
										{stat.label}
									</span>
								</dd>
							</div>
						))}
					</dl>
				</Reveal>
			</div>
		</Section>
	);
}
