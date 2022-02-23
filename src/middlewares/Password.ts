import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/IUser';

const passwordExist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    password,
  } = req.body as IUser;

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  next();
};

const IsPasswordTypeString = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    password,
  } = req.body as IUser;

  if (typeof password !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  }

  next();
};

const IsPasswordLengthCorrect = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    password,
  } = req.body as IUser;

  if (password.length <= 7) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }

  next();
};

export {
  passwordExist,
  IsPasswordTypeString,
  IsPasswordLengthCorrect,
};