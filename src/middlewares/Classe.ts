import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/IUser';

const classeExist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    classe,
  } = req.body as IUser;

  if (!classe) {
    return res.status(400).json({ error: 'Classe is required' });
  }

  next();
};

const IsClasseTypeString = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    classe,
  } = req.body as IUser;

  if (typeof classe !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }

  next();
};

const IsClasseLengthCorrect = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    classe,
  } = req.body as IUser;

  if (classe.length <= 2) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }

  next();
};

export {
  classeExist,
  IsClasseTypeString,
  IsClasseLengthCorrect,
};