import * as webpack from 'webpack';

import WebpackConfig from '../config/webpack.config';

const buildConfig = new WebpackConfig('production');

webpack(buildConfig).run((err: Error) => {
  if (err) {
    console.log(err);
  }
});
