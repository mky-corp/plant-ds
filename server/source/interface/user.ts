import { Document } from 'mongoose';

export default interface IUser extends Document {
  names: string;
  surnames: string;
  email: string;
  password: string;
  state: boolean;
}