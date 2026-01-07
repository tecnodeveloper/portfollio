import ReactImg from "public/assets/skills/react.png";
import NextJS from "public/assets/skills/nextjs.png";
import Javascript from "public/assets/skills/javascript.png";
import Typescript from "public/assets/skills/typescript.png";
import Node from "public/assets/skills/node.png";
import Git from "public/assets/skills/git.png";
import Docker from "public/assets/skills/docker.png";
import Tailwind from "public/assets/skills/tailwind.png";
//
import EcommerceStore from "public/assets/projects/ecommerce-store/ecommerce.jpg";
import EVC from "public/assets/projects/evc/evc.jpg";
import BuildMyMVP from "public/assets/projects/build-my-mvp/mvp.jpg";

export const skills = [
	{
		name: "PHP",
		image: Javascript,
	},
	{
		name: "Laravel",
		image: NextJS,
	},
	{
		name: "Node JS",
		image: Node,
	},
	{
		name: "React JS",
		image: ReactImg,
	},
	{
		name: "MongoDB",
		image: Tailwind,
	},
	{
		name: "MySQL",
		image: Typescript,
	},
	{
		name: "Git",
		image: Git,
	},
	{
		name: "Docker",
		image: Docker,
	},
];

export const projects = [
	{
		name: "Ecommerce Store",
		image: EcommerceStore,
		projectUrl: "/projects/ecommerce-store",
		tech: "Laravel & PHP",
	},
	{
		name: "EVC",
		image: EVC,
		projectUrl: "/projects/evc",
		tech: "Laravel",
	},
	{
		name: "BuildMyMVP",
		image: BuildMyMVP,
		projectUrl: "/projects/build-my-mvp",
		tech: "Node.js & React",
	},
];

export const emConfig = {
	serviceID: "service_8hxsh8z",
	templateID: "template_zcj3nzr",
	publicID: "Thia5QgjBtrZ0NeIR",
};
