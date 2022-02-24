import dotenv from 'dotenv';
import { Login } from '../models/interfaces/ILogin';

import models from '../models/Login';

dotenv.config();

const createUser = async (data: Login) => {
  const { username, password } = data;
  const loginData = await models.loginModel({ username, password });
  
  return loginData;
};

export default createUser;