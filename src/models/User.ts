import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const User = model('user', userSchema);

export default User;
