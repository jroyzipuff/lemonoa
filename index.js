const Express = require('express');
const packageJson = require('./package');
const bodyParser = require('body-parser')
const app = new Express();
const serverRunningSince = new Date();

app.use(bodyParser.json());

app.use(Express.static(__dirname + '/client/dist/pilatesafuoco/',{ maxAge: 100000 }))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/dist/pilatesafuoco/index.html`);
});

app.use('/api', require('./api'));


app.listen(process.env.PORT || 8080);
