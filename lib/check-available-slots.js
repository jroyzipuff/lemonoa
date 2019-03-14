const GoogleCalendar = require('./google-calendar');
const { CALENDAR_ID } = require('../config');
const  moment  = require('moment');
const  collections = require('pycollections');
const MAX_RESULTS = 40;
const SLOT_PREFIX = '[PAF]';

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
    console.log('Upcoming', MAX_RESULTS, 'events:');
    var eventsMap = new collections.DefaultDict(function(){return []});
    events.map((event, i) => {
      const start = event.start.dateTime || event.start.date;
      eventsMap.setOneNewValue(moment(event.start.dateTime).format('ddd DD/MM'), function() {
        eventDateHours = [];
        events.forEach(element => {
          if (moment(event.start.dateTime).format('ddd DD/MM') === moment(element.start.dateTime).format('ddd DD/MM'))
          {
            eventDateHours.push({start: moment(element.start.dateTime).format('HH:mm'), id: event.id});
          }
        });
        return eventDateHours;
      });
      console.log(`${start} - ${event.summary} - ${event.id}`);
    });
  } else {
    console.log('No upcoming events found.');
  }
  return eventsMap.items();
}