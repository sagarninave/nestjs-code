import * as mongoose from 'mongoose';

/* gives column definition to the database model */
export const UsersSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  role: String,
  created_at: { type: Date, default: Date.now },
});
