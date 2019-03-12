const chai = require('chai');

exports.config = {
  debug: true,
  maxInstances: 10,
  runner: 'local',
  specs: ['./test/*.ts'],
  exclude: [],
  logLevel: 'warn',
  deprecationWarnings: true,
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000,
    require: ['tsconfig-paths/register']
  },
  capabilities: [
    {
      maxInstances: 1,
      //
      browserName: process.env.BROWSER ? process.env.BROWSER : 'chrome',
    },
  ],
  services: ['selenium-standalone'],
  before: [
    () => {
      require('ts-node').register({ files: true });

      global.expect = chai.expect;
      chai.should();

      browser.setImplicitTimeout(10000);
    },
  ],
};
