const Express = require('express');
const packageJson = require('./package');
const bodyParser = require('body-parser')
const app = new Express();
const serverRunningSince = new Date();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    name: packageJson.name,
    version: packageJson.version,
    serverRunningSince,
  });
});

app.use('/api', require('./api'));

app.listen(process.env.PORT || 8080);
