import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Zain Ali | Backend Developer</title>
				<meta
					name="description"
					content="I'm a backend developer specialized in PHP, Laravel, Node.js, and modern web technologies to build scalable applications."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="overflow-x-clip">
				<Main />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}
