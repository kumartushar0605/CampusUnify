const mongoose = require('mongoose');

const bookingsSchema = mongoose.Schema({
  eventId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Event',
    required: [true, 'Bookings must be associated with an event'],
  },
  registeredUsers: {
    type: [mongoose.Schema.ObjectId],
    ref: 'User',
    required: [true, 'There should be registrations for the event'],
  },
});

const Bookings = mongoose.model('Bookings', bookingsSchema);

module.exports = Bookings;