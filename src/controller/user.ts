import { Request, Response } from 'express';

import { User } from '../models/IUser';

import createUser from '../services/user';

interface AUTH {
  token: string;
}

const createUserController = async (req: Request, res: Response<AUTH>) => {
  const { username, classe, level, password } = req.body as User;
  const user = await createUser({ username, classe, level, password });
  
  res.status(201).json(user);
};

export default createUserController;