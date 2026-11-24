import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.position}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time, so there is no static og.png to keep in sync.
 * A shared link is often the first impression, and recall is the goal, so it
 * carries exactly the two things worth remembering: the name and the position.
 */
export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					background: "#0a0a0a",
					padding: "80px",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "16px",
						fontSize: 24,
						color: "#34d399",
						letterSpacing: "0.2em",
						textTransform: "uppercase",
					}}
				>
					<div
						style={{
							width: 12,
							height: 12,
							borderRadius: 999,
							background: "#34d399",
						}}
					/>
					{site.location}
				</div>

				<div
					style={{
						marginTop: 32,
						fontSize: 112,
						fontWeight: 700,
						color: "#fafafa",
						letterSpacing: "-0.03em",
						display: "flex",
						gap: "24px",
					}}
				>
					<span>{site.hero.headlineLead}</span>
					<span style={{ color: "#34d399" }}>{site.hero.headlineAccent}</span>
				</div>

				<div
					style={{
						marginTop: 16,
						fontSize: 42,
						color: "#a1a1aa",
						letterSpacing: "-0.01em",
					}}
				>
					{site.position}
				</div>

				<div
					style={{
						marginTop: 56,
						fontSize: 28,
						color: "#71717a",
					}}
				>
					{site.siteUrl.replace("https://", "")}
				</div>
			</div>
		),
		size,
	);
}
