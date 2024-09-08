import { Schema, model } from 'mongoose';

const sessionSchema = new Schema({
  user: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  attendees: [{ name: String, email: String }],
});

export default model('Session', sessionSchema);
