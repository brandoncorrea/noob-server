const assert = require('assert');
const routes = require('../src/routes').default;
const helloWorld = require('../src/controllers/helloWorld').default;

describe('Routes', () => {
    context('get', () => {
        it('/hello', () => assert.equal(routes.get["/hello"], helloWorld.get));
    });
});