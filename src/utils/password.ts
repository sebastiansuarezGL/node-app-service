import * as argon2 from 'argon2';

function hash(password: string) {
  return argon2.hash(password, { type: argon2.argon2id });
}

function verify(hashedPassword: string, password: string) {
  return argon2.verify(hashedPassword, password);
}

export { hash, verify };
