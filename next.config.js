const path = require('path')

module.exports = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	swcMinify: true,
	compilerOptions: {
		baseUrl: '.',
		paths: {
			'@components/': ['components/'],
			'@config/': ['config/'],
			'@api/': ['api/'],
			'@lib/': ['lib/'],
			'@styles/': ['styles/'],
		},
	},
	include: ['*/.js'],
	exclude: ['node_modules', '.next'],
}
