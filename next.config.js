const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
	// Append the default value with md extensions
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	experimental: {
		appDir: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net'
			}
		]
	}
});
