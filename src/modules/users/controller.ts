import UserModel from '../../models/User';
import { hash } from '../../utils/password';

interface User {
  name: string;
  email: string;
  password: string;
}

function getAllUsers() {
  return UserModel.find();
}

function getUserById(id: string) {
  const user = UserModel.findById(id);
  return user;
}

async function createUser(user: User) {
  const password = await hash(user.password);
  const userWithHashedPassword = { ...user, password };
  const dbUser = new UserModel(userWithHashedPassword);
  dbUser.save();
}

function updateUserById(id: string, user: User) {
  return UserModel.findByIdAndUpdate(id, user);
}

function deleteUserByID(id: string) {
  return UserModel.findByIdAndDelete(id);
}

export { getAllUsers, getUserById, createUser, updateUserById, deleteUserByID };
