const path = require('path');

module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	components: './lib/components/**/[A-Z]*.{js,jsx}',
    template: './styleguide/template.tpl.html',
	webpackConfig(env) {
		const dir = path.resolve(__dirname, 'lib');
		return {
            externals: {
                'jquery': 'jQuery',
                'vhs': 'VHS'
            },
			module: {
				loaders: [
					{
						test: /\.jsx?$/,
						include: dir,
						loader: 'babel-loader',
					},
					{
						test: /\.css$/,
						include: dir,
						loader: 'style-loader!css-loader?modules&importLoaders=1',
					}
				]
			}
		};
	},
};
