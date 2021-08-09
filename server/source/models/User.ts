import { Schema, model } from 'mongoose';
import IUser from '../interface/user';

const UserSchema: Schema = new Schema({
  names: { type: String, required: true },
  surnames: { type: String, required: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true },
  state: { type: Boolean, default: true }
}, {
  versionKey: false,
  timestamps: true
});

export default model<IUser>('Users', UserSchema);