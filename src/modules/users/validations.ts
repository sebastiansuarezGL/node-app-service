import Joi from 'joi';
import { RequestValidationSchema } from '../../utils/validator';

const idSchema = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
});

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string(),
});

const idParamSchema: RequestValidationSchema = {
  params: idSchema,
};

const createUserRequestSchema: RequestValidationSchema = {
  body: createUserSchema,
};

const updateUserRequestSchema: RequestValidationSchema = {
  body: updateUserSchema,
};

export { idParamSchema, createUserRequestSchema, updateUserRequestSchema };
