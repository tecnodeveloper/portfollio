import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function SectionLabel({
	index,
	children,
}: {
	index: string;
	children: React.ReactNode;
}) {
	return (
		<p className="font-mono text-xs font-medium tracking-[0.2em] text-subtle uppercase">
			<span className="text-accent">{index}</span>
			<span className="mx-2 text-border-hover">/</span>
			{children}
		</p>
	);
}

export function Section({
	id,
	index,
	label,
	heading,
	children,
	className,
}: {
	id: string;
	index: string;
	label: string;
	heading: string;
	children: React.ReactNode;
	className?: string;
}) {
	const headingId = `${id}-heading`;

	return (
		<section
			id={id}
			aria-labelledby={headingId}
			className={cn("py-[clamp(5rem,12vw,9rem)]", className)}
		>
			<Container>
				<Reveal>
					<SectionLabel index={index}>{label}</SectionLabel>
					<h2
						id={headingId}
						className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.02em]"
					>
						{heading}
					</h2>
				</Reveal>
				<div className="mt-12">{children}</div>
			</Container>
		</section>
	);
}
