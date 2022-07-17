const helloWorld = require('./controllers/helloWorld').default;

exports.default = {
    get: {
        "/hello": helloWorld.get
    }
}
