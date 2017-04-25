
module.exports = {
  entry: 'app/app.js',
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main',
      TopNav: 'app/components/TopNav',
      Weather: 'app/components/Weather',
      WeatherForm: 'app/components/WeatherForm',
      WeatherMessage: 'app/components/WeatherMessage',
      About: 'app/components/About',
      Example: 'app/components/Example',
      axiosCall: 'app/api/axiosCall'
    },
    extensions: ['', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
