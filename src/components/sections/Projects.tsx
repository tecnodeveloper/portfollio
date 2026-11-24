import { ArrowUpRight, Github } from "lucide-react";

import { site } from "@/content/site";
import type { Project } from "@/content/types";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

function ProjectLink({
	href,
	children,
	icon: Icon,
}: {
	href: string;
	children: React.ReactNode;
	icon: React.ComponentType<{ className?: string }>;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="inline-flex items-center gap-1.5 rounded-md text-sm text-muted transition-colors duration-150 hover:text-accent"
		>
			<Icon className="size-4" aria-hidden="true" />
			{children}
		</a>
	);
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<article
			className={cn(
				"group rounded-xl border border-border bg-surface p-6 transition-colors duration-150 hover:border-border-hover hover:bg-surface-hover sm:p-8",
			)}
		>
			<div className="flex flex-wrap items-center justify-between gap-3">
				<p className="font-mono text-xs tracking-[0.15em] text-subtle uppercase">
					{project.category}
				</p>
				<div className="flex items-center gap-5">
					{project.live && (
						<ProjectLink href={project.live} icon={ArrowUpRight}>
							Live demo
						</ProjectLink>
					)}
					{project.github && (
						<ProjectLink href={project.github} icon={Github}>
							Code
						</ProjectLink>
					)}
				</div>
			</div>

			<h3 className="mt-4 text-xl font-medium tracking-[-0.01em] sm:text-2xl">
				{project.title}
			</h3>

			{/* The pain line carries more weight than the stack. It is the thing
			    a visitor should still be able to repeat an hour later. */}
			<p className="mt-5 border-l-2 border-accent-dim pl-4 text-base font-medium text-accent sm:text-lg">
				{project.pain}
			</p>

			<p className="mt-5 max-w-3xl text-base text-muted">
				{project.description}
			</p>

			<ul className="mt-7 flex flex-wrap gap-2">
				{project.tags.map((tag) => (
					<li key={tag}>
						<Tag>{tag}</Tag>
					</li>
				))}
			</ul>
		</article>
	);
}

export function Projects() {
	return (
		<Section
			id="projects"
			index="03"
			label="Projects"
			heading="Things I've built"
		>
			<div className="flex flex-col gap-6">
				{site.projects.map((project, i) => (
					<Reveal key={project.slug} delay={i * 0.06}>
						<ProjectCard project={project} />
					</Reveal>
				))}
			</div>
		</Section>
	);
}
