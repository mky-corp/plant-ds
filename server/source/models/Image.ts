import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  estate: { type: Boolean, default: true }
});

export default model('Images', imageSchema);