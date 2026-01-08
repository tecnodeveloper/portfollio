import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const EVC = () => {
	return (
		<>
			<Head>
				<title>Zain Ali | EVC Project</title>
				<meta
					name="description"
					content="Advanced web application built with Laravel and Blade templating engine featuring modern UI/UX design and robust backend architecture."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="w-full overflow-x-hidden">
				<div className="w-screen h-[50vh] relative">
					<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
					<div className="absolute z-1 w-full h-[50vh] bg-gradient-to-r from-secondary to-lightPrimary"></div>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">EVC Application</h2>
						<h3>Laravel / Blade / PHP / MySQL / Tailwind CSS</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							A sophisticated web application built with Laravel framework and Blade templating engine. This project demonstrates advanced backend development practices combined with modern frontend design patterns.
						</p>
						<p className="text-lg mt-2">
							The application features a scalable architecture, optimized database queries, and a responsive user interface. Built with performance and maintainability as core principles, it showcases best practices in Laravel development.
						</p>
						<p className="text-lg mt-2">
							The project includes comprehensive API endpoints, authentication systems, and role-based access control to ensure secure and efficient operations.
						</p>

						<p className="text-lg mt-4">🌟 Key Features:</p>
						<ol className="text-lg mt-2">
							<li>Advanced Authentication System</li>
							<li>Role-Based Access Control</li>
							<li>API Development with RESTful Standards</li>
							<li>Database Optimization & Migrations</li>
							<li>Modern Responsive UI with Tailwind</li>
							<li>Error Handling & Validation</li>
							<li>Performance Optimization</li>
							<li>Clean Code Architecture</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							<a
								href="https://github.com/tecnodeveloper/evc"
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
										<RiRadioButtonFill className="pr-1" /> Laravel
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Blade
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> MySQL
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Tailwind CSS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> PHP
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> JavaScript
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

export default EVC;
