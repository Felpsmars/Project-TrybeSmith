import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { createService, getAllService } from '../services/products';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'felps';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const { name, amount } = req.body;
  
    if (!authorization) return res.status(401).json({ error: 'Token not found' });
  
    jwt.verify(authorization, SECRET);
  
    const id = await createService({ name, amount });

    const product = {
      item: {
        id,
        name,
        amount,
      },
    };
  
    return res.status(201).json(product);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
  
    if (!authorization) return res.status(401).json({ error: 'Token not found' });
  
    jwt.verify(authorization, SECRET);
  
    const all = await getAllService();

    return res.status(200).json(all);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export { 
  createProduct,
  getAllProduct,
};