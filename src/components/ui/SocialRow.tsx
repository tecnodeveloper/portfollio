import { Github, Linkedin, Mail } from "lucide-react";

import { site } from "@/content/site";
import type { SocialIcon } from "@/content/types";
import { cn } from "@/lib/utils";

/** Medium has no lucide glyph, so it is drawn inline. */
function MediumIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			className={className}
			aria-hidden="true"
		>
			<path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12ZM20.96 12c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42S20.96 8.46 20.96 12ZM24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.53-5.75 1.19-5.75S24 8.83 24 12Z" />
		</svg>
	);
}

const icons: Record<SocialIcon, React.ComponentType<{ className?: string }>> = {
	github: Github,
	linkedin: Linkedin,
	medium: MediumIcon,
	mail: Mail,
};

export function SocialRow({
	className,
	size = "md",
}: {
	className?: string;
	size?: "md" | "sm";
}) {
	// Entries with no href yet (Medium) are simply skipped.
	const socials = site.socials.filter((s) => s.href);

	return (
		<ul className={cn("flex items-center gap-2", className)}>
			{socials.map((social) => {
				const Icon = icons[social.icon];
				const external = !social.href.startsWith("mailto:");

				return (
					<li key={social.label}>
						<a
							href={social.href}
							aria-label={social.label}
							{...(external
								? { target: "_blank", rel: "noreferrer" }
								: {})}
							className={cn(
								"flex items-center justify-center rounded-lg border border-border text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-accent-dim hover:text-accent",
								size === "md" ? "size-11" : "size-9",
							)}
						>
							<Icon className={size === "md" ? "size-5" : "size-4"} />
						</a>
					</li>
				);
			})}
		</ul>
	);
}
