import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const ANPR = () => {
	return (
		<>
			<Head>
				<title>Zain Ali | Vehicle Number Plate Recognition</title>
				<meta
					name="description"
					content="AI-powered Automatic Number Plate Recognition system using Python, OpenCV and deep learning to detect and read vehicle license plates in real-time."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="w-full overflow-x-hidden">
				<div className="w-screen h-[50vh] relative">
					<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
					<div className="absolute z-1 w-full h-[50vh] bg-gradient-to-r from-green-600 to-teal-500"></div>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">Vehicle Number Plate Recognition</h2>
						<h3>Python / OpenCV / TensorFlow / AI &amp; ML</h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							An AI-powered Automatic Number Plate Recognition (ANPR) system that uses computer vision and deep learning to detect and extract vehicle license plate information from images and video streams in real-time.
						</p>
						<p className="text-lg mt-2">
							The system leverages OpenCV for image preprocessing and contour detection, combined with a trained deep learning model using TensorFlow/Keras for character recognition. It can handle various lighting conditions, plate angles, and different plate formats.
						</p>
						<p className="text-lg mt-2">
							This project demonstrates practical application of AI/ML techniques in a real-world scenario — useful for parking systems, traffic monitoring, toll booths, and law enforcement applications.
						</p>

						<p className="text-lg mt-4"> Key Features:</p>
						<ol className="text-lg mt-2">
							<li>Real-time vehicle plate detection from video/images</li>
							<li>Deep learning model for character segmentation & recognition</li>
							<li>OpenCV preprocessing pipeline (grayscale, thresholding, edge detection)</li>
							<li>Handles multiple plate formats and angles</li>
							<li>Confidence scoring for character predictions</li>
							<li>Export detected plates to CSV/database</li>
							<li>Works under various lighting and weather conditions</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4">
							<a
								href="https://github.com/tecnodeveloper"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Github Code</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1">
						<div className="shadow-xl shadow-gray-400 rounded-xl py-4">
							<div className="p-2 text-md">
								<p className="text-center font-bold pb-2">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-1">
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Python
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> OpenCV
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> TensorFlow
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Keras
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> NumPy
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Tesseract OCR
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

export default ANPR;
