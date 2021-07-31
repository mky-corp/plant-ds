import {Schema, model} from 'mongoose';

const userSchema = new Schema({
  names: {type: String, required: true},
  surnames: {type: String, required: true},
  email: {type: String, unique: true, required: true, lowercase: true},
  password: {type: String, required: true},
  state: {type: Boolean, default: true}
});

export default model('Users', userSchema);