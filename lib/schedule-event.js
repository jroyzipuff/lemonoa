const GoogleCalendar = require('./google-calendar');
const { CALENDAR_ID } = require('../config');

module.exports = async (eventId, fullName, email, phone, attendees) => {
  const calendar = await GoogleCalendar.getCalendar();
  let res;
  try {
    res = await calendar.events.patchAsync({
      calendarId: CALENDAR_ID,
      eventId,
      requestBody: {
        summary: `[lemonoa] - ${fullName} ${attendees} attendees (${phone})`,
        description: phone,
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