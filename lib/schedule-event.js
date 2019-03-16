const GoogleCalendar = require('./google-calendar');
const { CALENDAR_ID } = require('../config');

module.exports = async (eventId, fullName, email, phone, attendees) => {
  const calendar = await GoogleCalendar.getCalendar();
  let res;
  email = email || 'pilatesafuoco@gmail.com';
  try {
    res = await calendar.events.patchAsync({
      sendUpdates: 'all',
      calendarId: CALENDAR_ID,
      eventId,
      requestBody: {
        summary: `Pilates a Fuoco - ${fullName} - ${attendees} participants (0`+`${phone})`,
        description: `Studio Location: Hertzel 41 Tel-Aviv`,
        attendees: [
          {
            email,
            displayName: fullName,
          }
        ],
      },
    });
  } catch(error) {
    console.log('Got error on schedule event', error.message)
  }

  return 'OK';
}