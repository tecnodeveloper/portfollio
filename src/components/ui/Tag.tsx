import { cn } from "@/lib/utils";

export function Tag({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-lg border border-border bg-bg px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-150 group-hover:border-border-hover",
				className,
			)}
		>
			{children}
		</span>
	);
}
