const path = require('path');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
module.exports = withImages(
  withSass(
    withCss({
      webpack: (config, { isServer }) => {
        if (isServer) {
          config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]',
              },
            },
          });
        }
        return config;
      },
      cssLoaderOptions: {
        url: false,
      },
    }),
  ),
);
