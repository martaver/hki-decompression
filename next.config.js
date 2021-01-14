const { join } = require('path');

module.exports = {
  sass: true,
  sassOptions: {
    includePaths: [join(__dirname, 'light/assets/css')],
  },
  modules: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-us', 'fr-fr'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-us',
  },
  env: {
    GOOGLE_TOKEN: process.env.GOOGLE_TOKEN,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    });

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-let/schema/loader'],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    });

    return config;
  },
};
