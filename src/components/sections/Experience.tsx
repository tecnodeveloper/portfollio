import { GraduationCap, BadgeCheck } from "lucide-react";

import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** "Sep 2025 – Nov 2025", or just "Present" when no start date is recorded yet. */
function formatRange(start: string, end: string) {
	if (!start) return end;
	return `${start} – ${end}`;
}

export function Experience() {
	return (
		<Section
			id="experience"
			index="04"
			label="Experience"
			heading="Where I've worked"
		>
			<ol className="relative border-l border-border pl-8">
				{site.experience.map((entry, i) => (
					<Reveal as="li" key={`${entry.org}-${entry.role}`} delay={i * 0.05}>
						<div className="relative pb-10">
							<span
								aria-hidden="true"
								className={
									entry.current
										? "absolute top-1.5 -left-[2.3125rem] size-2.5 rounded-full bg-accent ring-4 ring-bg"
										: "absolute top-1.5 -left-[2.3125rem] size-2.5 rounded-full bg-border-hover ring-4 ring-bg"
								}
							/>

							<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
								<h3 className="text-lg font-medium tracking-[-0.01em]">
									{entry.role}
								</h3>
								<span className="text-accent">{entry.org}</span>
								{entry.current && (
									<span className="rounded-md border border-accent-dim px-2 py-0.5 font-mono text-[0.625rem] tracking-wider text-accent uppercase">
										Current
									</span>
								)}
							</div>

							<p className="mt-1.5 font-mono text-xs tracking-wide text-subtle">
								{formatRange(entry.start, entry.end)}
								<span className="mx-2 text-border-hover">·</span>
								{entry.mode}
							</p>

							<ul className="mt-4 space-y-2">
								{entry.points.map((point, j) => (
									<li
										key={j}
										className="relative pl-5 text-base text-muted before:absolute before:top-[0.6875rem] before:left-0 before:size-1 before:rounded-full before:bg-border-hover"
									>
										{point}
									</li>
								))}
							</ul>
						</div>
					</Reveal>
				))}
			</ol>

			<Reveal delay={0.2}>
				<div className="mt-4 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
					<div className="flex items-start gap-3">
						<GraduationCap
							className="mt-0.5 size-5 shrink-0 text-subtle"
							aria-hidden="true"
						/>
						<div>
							<p className="text-base text-fg">{site.education.degree}</p>
							<p className="text-sm text-subtle">
								{site.education.school}
								<span className="mx-2 text-border-hover">·</span>
								<span className="font-mono text-xs">
									{formatRange(site.education.start, site.education.end)}
								</span>
							</p>
						</div>
					</div>

					{site.certifications.map((cert) => (
						<div key={cert.name} className="flex items-start gap-3">
							<BadgeCheck
								className="mt-0.5 size-5 shrink-0 text-subtle"
								aria-hidden="true"
							/>
							<div>
								<p className="text-base text-fg">{cert.name}</p>
								<p className="text-sm text-subtle">
									{cert.issuer}
									<span className="mx-2 text-border-hover">·</span>
									<span className="font-mono text-xs">{cert.issued}</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</Reveal>
		</Section>
	);
}
