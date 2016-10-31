const join = require('path').join;
const PATHS = {
  src: join(__dirname, 'src'),
  fonts: join(__dirname, 'fonts'),
  build: join(__dirname, 'build')
};


module.exports = {
  entry: {
		src: join(PATHS.src, 'index.js')
	},
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: '3000',
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  },
  output: {
    path: PATHS.build,
    publicPath: '/pong/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass?sourceMap']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include : PATHS.fonts,
        loader: `file?name=/fonts/[name].[ext]`
      }
    ]
  }
};
