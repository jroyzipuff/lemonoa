const { Router } = require('express');
const checkAvailableSlots = require('../../lib/check-available-slots');
const scheduleEvent = require('../../lib/schedule-event');

const router = Router({ mergeParams: true });

router.get('/slots', async (req, res) => {
  const events = await checkAvailableSlots();
  res.json(events);
});

router.patch('/slots/:id', async (req, res) => {
  const { id } = req.params;
  const { fullName, email, phone, attendees } = req.body;
  const results = await scheduleEvent(id, fullName, email, phone, attendees);
  res.json({ results });
});

module.exports = router;
