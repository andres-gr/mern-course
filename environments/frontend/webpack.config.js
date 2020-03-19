const merge = require('webpack-merge');

const configValidations = require('./webpack/configValidations');

module.exports = env => {
  if (!env) throw new Error(configValidations.ERR_NO_ENV_FLAG);
  const isDev = [
    'development',
    'localhost',
    'staging',
  ].includes(env);
  const configFile = isDev ? 'dev' : 'prod';
  const commonConfig = require('./webpack/webpack.common');
  const envConfig = require(`./webpack/webpack.${configFile}`);
  const config = merge(
    commonConfig({
      env,
      isDev,
    }),
    envConfig,
  );
  return config;
};
