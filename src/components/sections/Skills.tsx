import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
	return (
		<Section
			id="skills"
			index="02"
			label="Skills"
			heading="What I build with"
		>
			<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{site.skillGroups.map((group, i) => (
					<Reveal as="li" key={group.title} delay={i * 0.05}>
						<div className="group h-full rounded-xl border border-border bg-surface p-5 transition-colors duration-150 hover:border-border-hover hover:bg-surface-hover">
							<h3 className="font-mono text-xs font-medium tracking-[0.15em] text-subtle uppercase">
								{group.title}
							</h3>
							<div className="mt-4 flex flex-wrap gap-2">
								{group.items.map((item) => (
									<Tag key={item}>{item}</Tag>
								))}
							</div>
						</div>
					</Reveal>
				))}
			</ul>
		</Section>
	);
}
