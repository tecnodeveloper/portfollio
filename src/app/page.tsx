import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
	return (
		<>
			<Navbar />
			<main id="main">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Experience />
			</main>
			{/* Contact is the <footer> landmark, so it sits outside <main>. */}
			<Contact />
		</>
	);
}
