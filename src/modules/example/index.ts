import { Router } from 'express';
import controller from './controller';

const router = Router();

router.get('/example', (_req, res) => {
  const name = 'John Doe';
  const greet = controller(name);
  res.json(greet);
});

export default router;
