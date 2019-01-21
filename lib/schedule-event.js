const GoogleCalendar = require('./google-calendar');
const { CALENDAR_ID } = require('../config');

module.exports = async (eventId, fullName, email, phone) => {
  const calendar = await GoogleCalendar.getCalendar();
  let res;
  try {
    res = await calendar.events.patchAsync({
      calendarId: CALENDAR_ID,
      eventId,
      requestBody: {
        summary: `[lemonoa] - ${fullName}`,
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
    console.log('new errrror', error)
  }

  console.log('fmita343', res);

  return 'OK';
}