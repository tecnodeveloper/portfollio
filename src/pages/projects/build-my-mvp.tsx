import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const BuildMyMVP = () => {
	return (
		<>
			<Head>
				<title>Zain Ali | BuildMyMVP Project</title>
				<meta
					name="description"
					content="A modern full-stack MVP builder platform using Node.js backend and React frontend with TypeScript for type-safe development."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="w-full overflow-x-hidden">
				<div className="w-screen h-[50vh] relative">
					<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
					<div className="absolute z-1 w-full h-[50vh] bg-gradient-to-r from-primary to-secondary"></div>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">BuildMyMVP Platform</h2>
						<h3>Node.js / React / MongoDB / TypeScript</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							BuildMyMVP is a full-stack application that helps users rapidly build Minimum Viable Products (MVPs) for their business ideas. The platform combines a robust Node.js backend with a React frontend, leveraging TypeScript for type-safe development.
						</p>
						<p className="text-lg mt-2">
							The backend API handles complex business logic, user authentication, project management, and data persistence using MongoDB. The frontend provides an intuitive interface for users to design, configure, and deploy their MVPs without extensive coding knowledge.
						</p>
						<p className="text-lg mt-2">
							This project demonstrates proficiency in full-stack development, RESTful API design, real-time data updates, and modern development practices with TypeScript.
						</p>

						<p className="text-lg mt-4">🌟 Key Features:</p>
						<ol className="text-lg mt-2">
							<li>Project Template System</li>
							<li>Drag-and-Drop Builder Interface</li>
							<li>User Authentication & Authorization</li>
							<li>Real-time Collaboration Tools</li>
							<li>Deployment Management</li>
							<li>Project Analytics & Insights</li>
							<li>Version Control Integration</li>
							<li>API Documentation Generation</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							<a
								href="https://github.com/tecnodeveloper/BuildMyMVP"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Github Code</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1 ">
						<div className="shadow-xl shadow-gray-400 rounded-xl py-4 ">
							<div className="p-2 text-md">
								<p className="text-center font-bold pb-2">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-1 ">
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Node.js
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Express
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> React
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> TypeScript
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> MongoDB
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Tailwind CSS
									</p>
								</div>
							</div>
						</div>
					</div>
					<Link href="/#projects">
						<p className="underline cursor-pointer text-lg hover:text-primary">Back</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default BuildMyMVP;
