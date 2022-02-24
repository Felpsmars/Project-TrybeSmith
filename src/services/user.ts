import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../models/interfaces/IUser';

import models from '../models/User';

dotenv.config();

const SECRET: string = process.env.JWT_SECRET || 'felps';

interface AUTH {
  token: string;
}

const createUser = async (data: IUser): Promise<AUTH> => {
  await models.create(data);

  const token = jwt.sign({ data }, SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  
  return { token };
};

export default createUser;