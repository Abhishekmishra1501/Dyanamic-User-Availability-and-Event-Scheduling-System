import { Schema, model } from 'mongoose';

const availabilitySchema = new Schema({
  email: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});

export default model('Availability', availabilitySchema);
