const GoogleCalendar = require('./google-calendar');
const { CALENDAR_ID } = require('../config');
const  moment  = require('moment');
var momentRange = require('moment-range');
momentRange.extendMoment(moment);
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

  const events = res.data.items || [];
  event_look_up = [];
  events.forEach((event) => {event_look_up.push(
    {
    'dateHour': moment(event.start.dateTime).format('ddd DD/MM HH:mm'),
    'date': moment(event.start.dateTime).format('ddd DD/MM'),
    'hour': moment(event.start.dateTime).format('HH:mm'),
    'event': event
    }
      )
    });

  function findEventByDateHour(DateHourString) {
    for (var i = 0, len = event_look_up.length; i < len; i++) { 
        if (event_look_up[i]['dateHour'] === DateHourString) {
          return event_look_up[i]['event']
        }
    }
    return false
};

function findEventByDate(DateString) {
  for (var i = 0, len = event_look_up.length; i < len; i++) { 
      if (event_look_up[i]['date'] === DateString) {
        return event_look_up[i]['event']
      }
  }
  return false
};

  if (events.length) {
    console.log('Upcoming maximum of', MAX_RESULTS, 'events');

    const fromDate = moment();
    const toDate = moment().add(10, 'days');
    const dayHours = ['00', '01', '02', '03', '04' , '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00']
    const offHours = ['21', '22', '23', '00', '01', '02', '03', '04' , '05', '06'];
    const workHours = difference = dayHours.filter(x => !offHours.includes(x));
    const range = moment.range(fromDate, toDate).snapTo('day');
    const dates = Array.from(range.by('day', { step: 1 }));

    var eventsMap = new collections.DefaultDict(function(){return []});
    dates.map((date, i) => {
      eventsMap.setOneNewValue(moment(date).format('ddd DD/MM'), function() {
        if (findEventByDate(moment(date).format('ddd DD/MM'))) {
          eventDateHours = [];
          for (var j = 0, lenh = workHours.length; j < lenh; j++) {
            event_object = findEventByDateHour(date.format('ddd DD/MM') + ' ' + workHours[j] + ':00')
            if (event_object) {
              eventDateHours.push({start: moment(event_object.start.dateTime).format('HH:mm'), id: event_object.id});
            }
            else {
              eventDateHours.push({start: workHours[j] + ':00', id: false});
            }
          }
          return eventDateHours
        }
        else {
          eventDateHours = [];
          workHours.forEach(hour => {eventDateHours.push({start: hour+':00', id: false});})
          return eventDateHours
        }
      });
    });
  } else {
    console.log('No upcoming events found.');
  }
  return eventsMap.items();
}

