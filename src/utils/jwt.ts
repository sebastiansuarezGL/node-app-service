import jwt from 'jsonwebtoken';

const EXPIRATION = 10;

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw Error('Environment variable JWT_SECRET is not defined');
  }
  return secret;
}

function sign(payload: Object) {
  const secret = getSecret();
  return jwt.sign(payload, secret, { expiresIn: EXPIRATION });
}

function verify(token: string) {
  const secret = getSecret();
  return jwt.verify(token, secret);
}

export { sign, verify };
