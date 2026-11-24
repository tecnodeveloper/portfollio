export type SocialIcon = "github" | "linkedin" | "medium" | "mail";

export interface Social {
	label: string;
	href: string;
	icon: SocialIcon;
}

export interface SkillGroup {
	title: string;
	items: readonly string[];
}

export interface Project {
	slug: string;
	title: string;
	category: string;
	/**
	 * The one-line problem this project exists to solve, in plain English.
	 * Required, and never empty: a project that cannot be reduced to a single
	 * sentence of pain does not belong on this site.
	 */
	pain: string;
	description: string;
	tags: readonly string[];
	live?: string;
	github?: string;
	featured?: boolean;
}

export interface ExperienceEntry {
	role: string;
	org: string;
	start: string;
	end: string;
	current?: boolean;
	mode: string;
	points: readonly string[];
}

export interface Education {
	degree: string;
	school: string;
	start: string;
	end: string;
	note?: string;
}

export interface Certification {
	name: string;
	issuer: string;
	issued: string;
	href?: string;
}

export interface SiteContent {
	name: string;
	position: string;
	location: string;
	available: boolean;
	email: string;
	resumeUrl: string;
	siteUrl: string;
	socials: readonly Social[];
	hero: {
		eyebrow: string;
		headlineLead: string;
		headlineAccent: string;
		tagline: string;
		blurb: string;
	};
	about: {
		paragraphs: readonly string[];
		stats: readonly { label: string; value: string }[];
	};
	skillGroups: readonly SkillGroup[];
	projects: readonly Project[];
	experience: readonly ExperienceEntry[];
	education: Education;
	certifications: readonly Certification[];
	contact: {
		eyebrow: string;
		heading: string;
		blurb: string;
	};
}
