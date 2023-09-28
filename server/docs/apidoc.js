const config = require('config');
const { authenticate } = require('./users');

const apiDocumentation = {
  openapi: "3.0.1",
  info: {
    version: "1.0.1",
    title: "nodeSDR - Documentation",
    description: "Backend Server REST API",
    termsOfService: "https://jared-bloomer.github.io/nodeSDR/",
    contact: {
      name: "KW4JLB - Jared Bloomer",
      email: "kw4jlb@arrl.net",
      url: "https://jared-bloomer.github.io/nodeSDR/"
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  servers: [
    {
      url: "http://"+config.get('server.host')+":"+config.get('server.port')+"/",
      description: "Address of your backend server and port number."
    }
  ],
  tags: [
    {
      name: "roles"
    },
    {
      name: "users"
    }
  ],
  paths: {
    'api/users/authenticate': {
      post: authenticate,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

module.exports = { apiDocumentation };