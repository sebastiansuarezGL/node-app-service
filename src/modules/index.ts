import { Router } from 'express';
import { authMiddleware } from '../middlewares';
import example from './example';
import users from './users';
import authentication from './authentication';

const router = Router();

// Use the first array for not auth routes, and the second one for the one that need authentication
router.use('/api', [authentication, users], [authMiddleware, example]);

export default router;
