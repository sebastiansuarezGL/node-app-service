import { Schema } from 'joi';
import { Request, Response, NextFunction } from 'express';

enum Locations {
  Body = 'body',
  Parameters = 'params',
  QueryParameters = 'query',
}

type RequestValidationSchema = {
  [location in Locations]?: Schema;
};

function buildValidationMiddleware(schema: RequestValidationSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (
      Object.values(Locations).every(
        (location) =>
          schema[location]?.validate(req[location]).error === undefined,
      )
    ) {
      next();
    } else {
      res.sendStatus(400);
    }
  };
}

export default buildValidationMiddleware;
export { Locations, RequestValidationSchema };
