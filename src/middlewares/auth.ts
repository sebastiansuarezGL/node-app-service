import { RequestHandler } from 'express';
import { verify } from '../utils/jwt';

const AUTH_HEADER = 'Authorization';
const PREFIX = 'Bearer';

const authMiddleware: RequestHandler = (req, res, next) => {
  const authHeader = req.get(AUTH_HEADER);
  if (authHeader === undefined) {
    return res.sendStatus(401);
  }

  const [prefix, token] = authHeader.split(' ');

  if (prefix !== PREFIX) {
    return res.sendStatus(401);
  }

  try {
    verify(token);
  } catch (e) {
    return res.sendStatus(401);
  }
  return next();
};

export default authMiddleware;
