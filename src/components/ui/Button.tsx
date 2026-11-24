import { cn } from "@/lib/utils";

type ButtonLinkProps = {
	href: string;
	variant?: "primary" | "secondary" | "ghost";
	className?: string;
	children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variants = {
	primary:
		"bg-accent text-bg font-medium hover:bg-accent/90 border border-transparent",
	secondary:
		"border border-border text-fg hover:border-border-hover hover:bg-surface",
	ghost: "border border-transparent text-muted hover:text-fg",
} as const;

export function ButtonLink({
	href,
	variant = "primary",
	className,
	children,
	...props
}: ButtonLinkProps) {
	return (
		<a
			href={href}
			className={cn(
				"inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-all duration-150 hover:-translate-y-0.5",
				variants[variant],
				className,
			)}
			{...props}
		>
			{children}
		</a>
	);
}
