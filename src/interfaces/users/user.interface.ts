import { Document } from 'mongoose';

/* user interface to give type of data to th database modal */
export interface IUser extends Document {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone: string;
  readonly role: string;
  readonly created_at: Date;
}
