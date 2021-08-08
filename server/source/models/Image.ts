import { Schema, model } from 'mongoose';
import IImage from '../interface/image';

const ImageSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  state: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default model<IImage>('Images', ImageSchema);