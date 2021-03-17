import { Router } from 'express';
import buildValidationMiddleware from '../../utils/validator';
import {
  idParamSchema,
  createUserRequestSchema,
  updateUserRequestSchema,
} from './validations';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserByID,
} from './controller';

const router = Router();

// Admin method
router.get('/users', async (_req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

// Get profile
router.get(
  '/users/:id',
  buildValidationMiddleware(idParamSchema),
  async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  },
);

// Register user
router.post(
  '/users',
  buildValidationMiddleware(createUserRequestSchema),
  async (req, res) => {
    const user = req.body;
    await createUser(user);
    res.sendStatus(201);
  },
);

// Update information
router.patch(
  '/users/:id',
  buildValidationMiddleware(updateUserRequestSchema),
  async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    await updateUserById(id, user);
    res.sendStatus(204);
  },
);

// Delete profile
router.delete(
  '/users/:id',
  buildValidationMiddleware(idParamSchema),
  async (req, res) => {
    const { id } = req.params;
    await deleteUserByID(id);
    res.sendStatus(200);
  },
);

export default router;
