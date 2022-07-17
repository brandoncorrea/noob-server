const assert = require('assert');
const helloWorld = require('../../src/controllers/helloWorld').default;
const MockResponse = require('../mockResponse').default;

describe('Hello World', () => {
    context('GET', () => {
        it("Sends a 'Hello World' message", () => {
            let res = new MockResponse();
            helloWorld.get(null, res);
            assert.equal(res.sent.length, 1);
            assert.equal(res.sent[0], "Hello World!");
        })
    });
});