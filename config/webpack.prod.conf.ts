import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: [
    path.resolve(__dirname, '../server/app.ts')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js'
  },
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
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

export default config;
