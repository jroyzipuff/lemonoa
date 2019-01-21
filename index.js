const Express = require('express');
const packageJson = require('./package');
const bodyParser = require('body-parser')
const app = new Express();
const serverRunningSince = new Date();

app.use(bodyParser.json());

app.use('/api', require('./api'));

app.use(Express.static(__dirname + '/client/dist/lemonoa/',{ maxAge: 100000 }))

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/dist/lemonoa/index.html`);
});

app.listen(process.env.PORT || 8080);
