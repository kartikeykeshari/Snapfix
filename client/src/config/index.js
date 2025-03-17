/* eslint-disable no-undef */
const config = {};

const isDevelopment = process.env.NODE_ENV === 'development';

config.NODE_ENV = process.env.NODE_ENV;
config.VERSION = 'v1';

config.API_END_POINT = isDevelopment ? 'https://snapfix.onrender.com/' : '/';

config.GA_KEY = 'G-LBL46ZSPN5';

export default config;
