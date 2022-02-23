import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/IUser';

const usernameExist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    username,
  } = req.body as IUser;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  next();
};

const IsTypeString = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    username,
  } = req.body as IUser;

  if (typeof username !== 'string') {
    return res.status(422).json({ error: 'Username must be a string' });
  }

  next();
};

const IsLengthCorrect = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    username,
  } = req.body as IUser;

  if (username.length <= 2) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  }

  next();
};

export {
  usernameExist,
  IsTypeString,
  IsLengthCorrect,
};