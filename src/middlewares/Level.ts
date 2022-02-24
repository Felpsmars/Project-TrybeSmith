import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/interfaces/IUser';

const levelExist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    level,
  } = req.body as IUser;

  if (!level && level !== 0) {
    return res.status(400).json({ error: 'Level is required' });
  }

  next();
};

const IsLevelTypeNumber = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    level,
  } = req.body as IUser;

  if (typeof level !== 'number') {
    return res.status(422).json({ error: 'Level must be a number' });
  }

  next();
};

const IsLevelLengthCorrect = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    level,
  } = req.body as IUser;

  if (level <= 0) {
    return res.status(422).json({ error: 'Level must be greater than 0' });
  }

  next();
};

export {
  levelExist,
  IsLevelTypeNumber,
  IsLevelLengthCorrect,
};