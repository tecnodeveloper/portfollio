import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const FCMBExperience = {
		companyName: "NexL Tech",
		role: "Backend Developer",
		duration: "July 2025 - Oct 2025",
		activities: [
			"Built enterprise-level ecommerce platforms using Laravel framework with robust payment integrations.",
			"Designed and implemented RESTful APIs using PHP and Node.js for various web applications.",
			"Managed complex database architectures with MySQL and MongoDB for high-traffic applications.",
			"Implemented real-time features using WebSockets and optimized backend performance.",
			"Collaborated with frontend developers to ensure seamless API integration and data flow.",
		],
	};

	const MuzzlabExperience = {
		companyName: "Freelance Backend Developer",
		role: "Backend Developer",
		duration: "2023 - Present",
		activities: [
			"Contributed to building multiple web applications using Laravel and Node.js.",
			"Worked with frontend developer to integerate smooth Api flow.",
			"Worked on API development and third-party service integrations.",
			"Participated in code reviews and maintained code quality standards.",
			"Worked with team members using Git and agile development practices.",
		],
	};

	return (
		<div id="experience" className="w-full lg:h-screen p-2 ">
			<div
				className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I&apos;ve Worked</h2>
				<div className="mt-2 ">
					<BasicTabs
						tabList={["Freelance", "Company"]}
						tabPanel={[
							<Details key={"Company"} experienceDetails={MuzzlabExperience} />,
							<Details key={"FREELANCE"} experienceDetails={FCMBExperience} />,
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
