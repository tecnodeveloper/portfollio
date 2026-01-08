import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const EcommerceStore = () => {
	return (
		<>
			<Head>
				<title>Zain Ali | Ecommerce Store Project</title>
				<meta
					name="description"
					content="Enterprise-level ecommerce platform built with Laravel PHP featuring secure payment processing, inventory management, and a responsive user interface."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="w-full overflow-x-hidden">
				<div className="w-screen h-[50vh] relative">
					<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
					<div className="absolute z-1 w-full h-[50vh] bg-gradient-to-r from-primary to-lightPrimary"></div>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">Ecommerce Store Platform</h2>
						<h3>Laravel / PHP / MySQL / Bootstrap</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							A full-featured ecommerce platform built with Laravel framework that enables businesses to sell products online. The application includes comprehensive admin dashboard, product management, shopping cart, secure payment processing, and order management systems.
						</p>
						<p className="text-lg mt-2">
							The backend is built with Laravel PHP framework with MySQL database for robust data management. The frontend is responsive and user-friendly, allowing customers to browse products, add items to cart, and complete purchases securely.
						</p>
						<p className="text-lg mt-2">
							Key focus areas include security, scalability, and performance optimization. The platform is designed to handle multiple concurrent users and transactions with reliability.
						</p>

						<p className="text-lg mt-4">🌟 Key Features:</p>
						<ol className="text-lg mt-2">
							<li>Product Catalog with Categories and Search</li>
							<li>Shopping Cart & Checkout System</li>
							<li>Secure Payment Integration</li>
							<li>Order Management & Tracking</li>
							<li>User Authentication & Authorization</li>
							<li>Admin Dashboard for Store Management</li>
							<li>Inventory Management System</li>
							<li>Responsive Mobile Design</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							<a
								href="https://github.com/tecnodeveloper/EcommerceStore"
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
										<RiRadioButtonFill className="pr-1" /> PHP
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Tailwindcss
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> MySQL
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Bootstrap
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> HTML5
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> CSS3
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

export default EcommerceStore;
