import type { SiteContent } from "./types";

/**
 * Single source of truth for everything the site says.
 *
 * Rule: every project needs a one-line `pain`. If a project can't be reduced to
 * one sentence of problem, it doesn't go on the site.
 */
export const site: SiteContent = {
	name: "Zain Ali",
	position: "Backend Engineer who ships AI features",
	location: "Lahore, Pakistan",
	available: true,
	email: "recluzedev@gmail.com",
	resumeUrl: "/resume.pdf",
	siteUrl: "https://recluzedev.me",

	socials: [
		{
			label: "GitHub",
			href: "https://github.com/tecnodeveloper",
			icon: "github",
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/recluzedev",
			icon: "linkedin",
		},
		// No posts published yet. Entries with an empty href are skipped, so
		// blanking this href is how to hide it again.
		{ label: "Medium", href: "https://medium.com/@recluzedev", icon: "medium" },
		{
			label: "Email",
			href: "mailto:recluzedev@gmail.com",
			icon: "mail",
		},
	],

	hero: {
		eyebrow: "Available for work",
		headlineLead: "Zain",
		headlineAccent: "Ali",
		tagline: "Backend Engineer who ships AI features",
		blurb:
			"I build the server side of things — APIs, data models, auth — and lately that means putting language models behind interfaces people actually use. Currently finishing a CS degree and teaching Python over Zoom.",
	},

	about: {
		paragraphs: [
			"I build backend systems, and lately that means putting language models behind interfaces people actually use.",
			"My final-year project is a multi-turn chatbot: a Next.js front end, a Flask service, and Supabase for storage and auth with row-level security. The part I'd defend in a code review is the feedback loop. Every reply asks the user to rate it on correctness, length and quality before the conversation continues. It's mildly annoying on purpose, because it's the only reason the analytics mean anything.",
			"Before that: ten months at TechInnSolutions maintaining and extending a backend over time, which is a different skill from writing one, then three months at Nexl Tech working inside a codebase I hadn't written. I now lead a four-week Python course for students at iCodeGuru over Zoom — explaining code to people learning it is the fastest way I've found to notice what I only half understand myself.",
		],
		stats: [
			{ value: "13", label: "Months of professional backend work" },
			{ value: "2", label: "Companies shipped code at" },
			{ value: "2025", label: "Contributing to open source since" },
		],
	},

	skillGroups: [
		{ title: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
		{ title: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
		{ title: "Backend", items: ["Node.js", "Express", "Flask", "REST APIs"] },
		{ title: "Data", items: ["Supabase", "PostgreSQL", "SQLite"] },
		{ title: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "Postman"] },
	],

	projects: [
		{
			slug: "multi-turn-chatbot",
			title: "Multi-Turn AI Chatbot",
			category: "Final Year Project",
			pain: "You can't trust a quality dashboard where the model grades its own answers.",
			description:
				"A context-aware chatbot that makes a human rate every reply — correctness, length, overall quality — before the session is allowed to advance. Inference routes to Gemini in the cloud or a local Ollama model behind one adapter, so the model is a config value rather than a code path, and identical conversations can be compared across both.",
			tags: [
				"Next.js",
				"TypeScript",
				"Flask",
				"Python",
				"Supabase",
				"PostgreSQL",
				"Ollama",
				"Gemini",
			],
			live: "https://multiturn-chatbot.vercel.app",
			github: "https://github.com/tecnodeveloper/mtChatbot",
			featured: true,
		},
		{
			slug: "price-watchdog",
			title: "Price Watchdog",
			category: "Autonomous Agent",
			pain: "The price drops and you miss it, because nobody refreshes a product page every day.",
			description:
				"A ReAct agent that watches a product across multiple e-commerce sites and fires an alert the moment it hits a target price. An LLM does the extraction, so it picks out the right product, price and variant instead of choking on ads and related items, and it logs history so a “50% off” banner can be checked against what the thing actually cost last month.",
			tags: ["Python", "BeautifulSoup", "Streamlit", "Gemini API", "SQLite"],
			github: "https://github.com/tecnodeveloper/pwdAgent",
		},
	],

	experience: [
		{
			role: "Lead Python Instructor",
			org: "iCodeGuru",
			start: "Aug 2026",
			end: "Present",
			current: true,
			mode: "Remote · Zoom",
			points: [
				"Lead a four-week Python course for students over Zoom — fundamentals through to writing scripts that do real work.",
				"Explaining code to people who are learning it is the fastest way I've found to notice what I only half understand myself.",
			],
		},
		{
			role: "Associate Software Engineer",
			org: "Nexl Tech",
			start: "Sep 2025",
			end: "Nov 2025",
			mode: "Gujranwala · On-site",
			points: [
				"Worked on the website for an EV charging station.",
				"Most of the three months went on working inside a codebase I hadn't written: tracing how the existing controllers and schema fitted together before extending them, so a change in one place didn't quietly break something elsewhere.",
			],
		},
		{
			role: "Backend Developer",
			org: "TechInnSolutions",
			start: "Dec 2024",
			end: "Sep 2025",
			mode: "Gujranwala · On-site",
			points: [
				"Ten months maintaining and extending an existing PHP and Node.js backend.",
				"My first sustained stretch of living with code over time rather than finishing a project and moving on — a different skill from writing it in the first place.",
			],
		},
		{
			role: "Contributor",
			org: "Open Source",
			start: "Jan 2025",
			end: "Present",
			current: true,
			mode: "Remote",
			points: [
				"Pull requests, bug fixes and documentation improvements across JavaScript and Python codebases.",
				"Took part in Elite Coders Winter of Code (ECWoC) alongside 5,000+ participants.",
			],
		},
	],

	education: {
		degree: "BS Computer Science",
		school: "Virtual University of Pakistan",
		start: "Jul 2022",
		end: "May 2026",
	},

	certifications: [
		{
			name: "GitHub Foundations",
			issuer: "GitHub",
			issued: "May 2025",
		},
	],

	contact: {
		eyebrow: "Hiring, or have something to build?",
		heading: "Let's talk",
		blurb:
			"I'd like to hear from people running local models or retrieval systems somewhere real — particularly about where they break.",
	},
};
