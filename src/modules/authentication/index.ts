import { Router } from 'express';
import authenticate from './controller';

const router = Router();

router.post('/authentications', async (req, res) => {
  const { email, password } = req.body;
  const token = await authenticate(email, password);
  if (!token) {
    res.sendStatus(401);
  } else {
    res.json({ token });
  }
});

export default router;
