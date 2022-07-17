const express = require('express');
const routes = require('./routes').default;
const app = express();
const port = 3001;

Object.entries(routes).forEach(([method, handlers]) =>
    Object.entries(handlers).forEach(([uri, fn]) => app[method](uri, fn)))

app.listen(port, () => console.log(`Noob app listening on port ${port}`));
