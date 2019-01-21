const GoogleCalendar = require('./google-calendar');
const { CALENDAR_ID } = require('../config');

const MAX_RESULTS = 10;
const SLOT_PREFIX = 'Irena';

module.exports = async () => {
  const calendar = await GoogleCalendar.getCalendar();
  const res = await calendar.events.listAsync({
    calendarId: CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    maxResults: MAX_RESULTS,
    q: SLOT_PREFIX,
    singleEvents: true,
    orderBy: 'startTime',
  });

  const events = res.data.items;
  if (events.length) {
    console.log('Upcoming 10 events:');
    events.map((event, i) => {
      const start = event.start.dateTime || event.start.date;
      console.log(`${start} - ${event.summary}`);
    });
  } else {
    console.log('No upcoming events found.');
  }

  return events;
}