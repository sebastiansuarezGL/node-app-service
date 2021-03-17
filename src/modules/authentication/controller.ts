import UserModel from '../../models/User';
import { sign } from '../../utils/jwt';
import { verify } from '../../utils/password';

async function authenticate(email: string, password: string) {
  const user = await UserModel.findOne({ email });
  if (!user) {
    return null;
  }

  if (!(await verify(user.password, password))) {
    return null;
  }

  const { id, email: userEmail } = user;

  return sign({ id, userEmail });
}

export default authenticate;
