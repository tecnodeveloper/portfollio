// Skills images
const PHP = "/assets/skills/php_logo.png";
const Javascript = "/assets/skills/javascript.png";
const Node = "/assets/skills/node.png";
const ReactImg = "/assets/skills/react.png";
const Tailwind = "/assets/skills/tailwind.png";
const Git = "/assets/skills/git.png";
const Docker = "/assets/skills/docker.png";
const MongoDB = "/assets/skills/mongo.png";

// Project images
const EcommerceStore = "/assets/projects/ecommerce-store/ecommerce.jpg";
const EVC = "/assets/projects/evc/evc.jpg";
const BuildMyMVP = "/assets/projects/build-my-mvp/mvp.jpg";
const ANPR = "/assets/projects/anpr/anpr.jpg";

export const skills = [
	{
		name: "PHP",
		image: PHP,
	},
	{
		name: "JavaScript",
		image: Javascript,
	},
	{
		name: "Node JS",
		image: Node,
	},
	{
		name: "React",
		image: ReactImg,
	},
	{
		name: "Tailwind CSS",
		image: Tailwind,
	},
	{
		name: "Git",
		image: Git,
	},
	{
		name: "Docker",
		image: Docker,
	},
	{
		name: "MongoDB",
		image: MongoDB,
	},
];

export const projects = [
	{
		name: "Ecommerce Store",
		image: EcommerceStore,
		projectUrl: "/projects/ecommerce-store",
		tech: "Laravel & PHP",
		description: "Full-featured ecommerce platform with admin dashboard, product management, cart, payment integration, and order tracking.",
		tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
		github: "https://github.com/tecnodeveloper/EcommerceStore",
		category: "Web App",
	},
	{
		name: "EVC – Electric Vehicle Charging",
		image: EVC,
		projectUrl: "/projects/evc",
		tech: "Laravel",
		description: "Smart EV charging station management system with real-time slot booking, user authentication, and charging history.",
		tags: ["Laravel", "PHP", "MySQL", "REST API"],
		github: "https://github.com/tecnodeveloper",
		category: "Web App",
	},
	{
		name: "BuildMyMVP",
		image: BuildMyMVP,
		projectUrl: "/projects/build-my-mvp",
		tech: "Node.js & React",
		description: "Platform connecting entrepreneurs with developers to rapidly build MVPs. Features project listing, proposals, and real-time chat.",
		tags: ["Node.js", "React", "MongoDB", "Tailwind"],
		github: "https://github.com/tecnodeveloper",
		category: "Full Stack",
	},
	{
		name: "Vehicle Number Plate Recognition",
		image: ANPR,
		projectUrl: "/projects/anpr",
		tech: "Python & AI/ML",
		description: "AI-powered Automatic Number Plate Recognition (ANPR) system using computer vision and deep learning to detect and read vehicle license plates in real-time.",
		tags: ["Python", "OpenCV", "TensorFlow", "AI/ML"],
		github: "https://github.com/tecnodeveloper",
		category: "AI / ML",
	},
];

export const emConfig = {
	serviceID: "service_8hxsh8z",
	templateID: "template_zcj3nzr",
	publicID: "Thia5QgjBtrZ0NeIR",
};
