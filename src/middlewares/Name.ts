import { Request, Response, NextFunction } from 'express';
import IName from '../models/interfaces/IName';

const nameExist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
  } = req.body as IName;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  next();
};

const IsNameTypeString = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
  } = req.body as IName;

  if (typeof name !== 'string') {
    return res.status(422).json({ error: 'Name must be a string' });
  }

  next();
};

const IsNameLengthCorrect = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
  } = req.body as IName;

  if (name.length <= 2) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  }

  next();
};

export {
  nameExist,
  IsNameTypeString,
  IsNameLengthCorrect,
};