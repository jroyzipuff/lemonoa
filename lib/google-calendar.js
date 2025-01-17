const fs = require('fs');
const util = require('util');
const readline = require('readline');
const {google} = require('googleapis');
const Bluebird = require("bluebird");

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const TOKEN_PATH = 'token.json';

const authorize = async (credentials) =>  {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  return new Promise((resolve) => {
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getAccessToken(oAuth2Client);
      oAuth2Client.setCredentials(JSON.parse(token));
      resolve(oAuth2Client);
    });
  })
}

function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      // callback(oAuth2Client);
    });
  });
}

const readFile = util.promisify(fs.readFile);
const path = require('path');
const jsonPath = path.join(__dirname, '..', 'config', 'credentials.json');

class GoogleCalender {
  async getCalendar() {
    if (this.calendar) {
      return this.calendar;
    }
    const content = await readFile(jsonPath);
    const auth = await authorize(JSON.parse(content));
    const calendar = google.calendar({version: 'v3', auth});
    this.calendar = {
      events: Bluebird.promisifyAll(calendar.events),
    };
    return this.calendar;
  }
}

module.exports = new GoogleCalender();
