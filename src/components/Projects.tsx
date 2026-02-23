import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../utils/constants";

const categoryColors: Record<string, string> = {
	"Web App": "bg-blue-100 text-blue-700",
	"Full Stack": "bg-purple-100 text-purple-700",
	"AI / ML": "bg-green-100 text-green-700",
};

const Projects = () => {
	const [hovered, setHovered] = useState<string | null>(null);

	return (
		<div id="projects" className="w-full bg-gray-50 py-20">
			<div className="max-w-[1240px] mx-auto px-4">
				{/* Section Header */}
				<div data-aos="fade-up" data-aos-duration="800" className="mb-12">
					<p className="text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-2">
						Portfolio
					</p>
					<div className="flex items-end gap-4">
						<h2 className="text-4xl font-bold text-gray-800">Projects</h2>
						<div className="mb-2 h-[3px] w-16 bg-primary rounded-full"></div>
					</div>
					<p className="text-gray-500 mt-3 max-w-xl text-lg">
						A collection of things I&apos;ve built — from web apps to AI models.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<div
							key={project.name}
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay={`${index * 100}`}
							onMouseEnter={() => setHovered(project.name)}
							onMouseLeave={() => setHovered(null)}
							className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
						>
							{/* Image */}
							<div className="relative overflow-hidden h-52">
								{project.image && project.image !== "/assets/projects/anpr/anpr.jpg" ? (
									<img
										src={project.image}
										alt={project.name}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								) : (
									<div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/60 flex items-center justify-center">
										<span className="text-5xl">🤖</span>
									</div>
								)}
								{/* Category Badge */}
								<span
									className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
										categoryColors[project.category] ?? "bg-gray-100 text-gray-700"
									}`}
								>
									{project.category}
								</span>
							</div>

							{/* Content */}
							<div className="p-6 flex flex-col flex-1">
								<div className="flex items-start justify-between mb-2">
									<h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-200">
										{project.name}
									</h3>
									<a
										href={project.github}
										target="_blank"
										rel="noreferrer"
										className="text-gray-400 hover:text-gray-800 transition-colors duration-200 ml-2 mt-1"
										title="View on GitHub"
									>
										<FaGithub size={20} />
									</a>
								</div>

								<p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
									{project.description}
								</p>

								{/* Tech Tags */}
								<div className="flex flex-wrap gap-2 mb-5">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-200 cursor-default"
										>
											{tag}
										</span>
									))}
								</div>

								{/* CTA */}
								<Link href={project.projectUrl}>
									<a className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 border-b-2 border-primary/30 hover:border-primary pb-1 w-fit">
										View Details
										<FaExternalLinkAlt size={12} />
									</a>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
