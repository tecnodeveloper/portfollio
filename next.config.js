/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
	webpack: (config) => {
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};

module.exports = nextConfig;
