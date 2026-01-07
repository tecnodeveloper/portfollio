import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "public/assets/ProfilePicture.jpeg";

const About = () => {
return (
<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
<div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
<p className="uppercase text-xl tracking-widest text-primary">About</p>
<h2 className="py-4">Who I Am</h2>
<p className="py-2 text-gray-600 text-lg">
A dedicated Backend Developer with expertise in building scalable web applications using PHP, Laravel, and Node.js. I have hands-on experience developing robust REST APIs, managing databases with MySQL and MongoDB, and implementing modern backend architectures that power real-world applications.
</p>
<p className="py-2 text-gray-600 text-lg">
I specialize in Laravel framework for rapid and efficient backend development, with strong knowledge of database design, API development, and server-side programming. Currently working on enterprise-level ecommerce solutions and passionate about creating efficient, maintainable code. I believe in writing clean code, following best practices, and continuously learning new technologies.
</p>
<div className="w-[50%]">
<Link href="/#projects">
<p className="py-2 text-gray-600 underline cursor-pointer text-lg hover:text-primary">
Check out some of my latest projects.
</p>
</Link>
</div>
</div>
<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 overflow-hidden">
<div data-aos="fade-up" data-aos-duration="1000" className="w-full">
<Image 
src={AboutImg} 
className="rounded-xl w-full h-auto object-cover" 
alt="Zain Ali" 
height={600} 
width={500} 
loading="lazy" 
/>
</div>
</div>
</div>
</div>
);
};

export default About;
