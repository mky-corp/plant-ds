import { Document } from 'mongoose';

export default interface IImage extends Document {
  name: string;
  description: string;
  state: boolean;
}
