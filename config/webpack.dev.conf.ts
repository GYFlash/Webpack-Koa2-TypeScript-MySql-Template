import * as path from 'path';
import * as StartServerPlugin from 'start-server-webpack-plugin';
import * as webpack from 'webpack';
import * as nodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  mode: 'development',
  entry: [
    'webpack/hot/signal',
    path.resolve(__dirname, '../server/app.ts')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js'
  },
  externals: [nodeExternals({
    whitelist: ['webpack/hot/signal']
  })],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, '../tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StartServerPlugin({
      name: 'app.js',
      signal: true,
      nodeArgs: ['--inspect']
    }),
  ]
};

export default config;
