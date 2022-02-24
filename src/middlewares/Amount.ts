import { Request, Response, NextFunction } from 'express';
import IAmount from '../models/interfaces/IAmount';

const amountExist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    amount,
  } = req.body as IAmount;

  if (!amount) {
    return res.status(400).json({ error: 'Amount is required' });
  }

  next();
};

const IsAmountTypeString = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    amount,
  } = req.body as IAmount;

  if (typeof amount !== 'string') {
    return res.status(422).json({ error: 'Amount must be a string' });
  }

  next();
};

const IsAmountLengthCorrect = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    amount,
  } = req.body as IAmount;

  if (amount.length <= 2) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }

  next();
};

export {
  amountExist,
  IsAmountTypeString,
  IsAmountLengthCorrect,
};