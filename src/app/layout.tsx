import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { site } from "@/content/site";
import "./globals.css";

const description = `${site.name} — ${site.position}. ${site.hero.blurb}`;

export const metadata: Metadata = {
	metadataBase: new URL(site.siteUrl),
	title: {
		default: `${site.name} — ${site.position}`,
		template: `%s — ${site.name}`,
	},
	description,
	alternates: { canonical: "/" },
	authors: [{ name: site.name, url: site.siteUrl }],
	creator: site.name,
	keywords: [
		site.name,
		"Backend Engineer",
		"AI Engineer",
		"Next.js",
		"Python",
		"Flask",
		"Supabase",
		"Pakistan",
	],
	openGraph: {
		type: "profile",
		siteName: site.name,
		title: `${site.name} — ${site.position}`,
		description,
		url: site.siteUrl,
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: `${site.name} — ${site.position}`,
		description,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true },
	},
};

export const viewport: Viewport = {
	themeColor: "#0a0a0a",
	colorScheme: "dark",
};

/**
 * Person schema, so search engines tie the name to the profiles rather than
 * treating each one as a separate entity. Recall is the goal of this site.
 */
function PersonJsonLd() {
	const json = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: site.name,
		jobTitle: site.position,
		url: site.siteUrl,
		email: `mailto:${site.email}`,
		address: {
			"@type": "PostalAddress",
			addressLocality: site.location,
		},
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: site.education.school,
		},
		knowsAbout: site.skillGroups.flatMap((group) => [...group.items]),
		sameAs: site.socials
			.filter((s) => s.href && !s.href.startsWith("mailto:"))
			.map((s) => s.href),
	};

	return (
		<script
			type="application/ld+json"
			// The payload is built from local content, not user input.
			dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
		/>
	);
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${GeistSans.variable} ${GeistMono.variable}`}
			suppressHydrationWarning
		>
			<head>
				{/* Without JS the reveal transition never fires, so show everything. */}
				<noscript>
					<style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
				</noscript>
			</head>
			<body className="bg-bg text-fg antialiased">
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-bg"
				>
					Skip to content
				</a>
				{children}
				<PersonJsonLd />
			</body>
		</html>
	);
}
