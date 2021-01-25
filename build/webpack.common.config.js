const path = require('path');
const resolve = (dir) => path.resolve(__dirname, '../', dir);
const webpack = require('webpack');
const babelConfig = require('./babel.common.config')(false);
const TerserPlugin = require('terser-webpack-plugin');
const distFileName = 'makeit-modal';

module.exports = {
    mode: 'production',
    entry: resolve('index'),
    output: {
        path: resolve('dist'),
        filename: distFileName + '.min.js',
        library: distFileName,
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelConfig
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: resolve('tsconfig.dts.json'),
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.less', '.vue', '.json', '.ts', '.tsx', '.md']
    },
    externals: [
        {
            vue: {
				root: 'Vue',
				commonjs: 'vue',
				commonjs2: 'vue',
				amd: 'vue'
            },
			'ant-design-vue': {
				root: 'AntDesignVue',
				commonjs: 'ant-design-vue',
				commonjs2: 'ant-design-vue',
				amd: 'ant-design-vue'
			},
			'@ant-design/icons-vue': {
				root: '@AntDesign/IconsVue',
				commonjs: '@ant-design/icons-vue',
				commonjs2: '@ant-design/icons-vue',
				amd: '@ant-design/icons-vue'
			}
        }
    ],
    plugins: [
        new webpack.LoaderOptionsPlugin({
			minimize: true
		})
    ],
    optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				test: /\.min.js(\?.*)?$/i
			})
		]
	}
}