/* import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'felps';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const verifiedToken = jwt.verify(token, SECRET);

  if (!verifiedToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

export default verifyToken;  */