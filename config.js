const config = {};

const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

config.PORT = isDevelopment ? 5000 : process.env.PORT || 5000;
config.API_VERSION = isDevelopment ? '/v1' : process.env.API_VERSION || '/v1';
config.NODE_ENV = process.env.NODE_ENV;
config.DB_STRING = isDevelopment ? 'mongodb+srv://kesharikartikey9140:ZLxw7m5RrTkypsP0@cluster0.ltxo9.mongodb.net/service' : process.env.DB_STRING;
config.SECREATE = isDevelopment ? 'development' : process.env.SECREATE;

module.exports = { config };


// const config = {};

// const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

// config.PORT = isDevelopment ? 5000 : process.env.PORT || 5000;
// config.API_VERSION = isDevelopment ? '/v1' : process.env.API_VERSION || '/v1';
// config.NODE_ENV = process.env.NODE_ENV;
// config.DB_STRING = isDevelopment ? 'mongodb+srv://rishikeshari772:6Xc6WIXjDoABDm1K@cluster0.i2pw7.mongodb.net/home' : process.env.DB_STRING;
// config.SECREATE = isDevelopment ? 'development' : process.env.SECREATE;

// module.exports = { config };