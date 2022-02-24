import { Router } from 'express';

import loginController from '../controller/login';
import { passwordExist } from '../middlewares/Password';
import { usernameExist } from '../middlewares/Username';

const loginRoutes = Router();

loginRoutes.post(
  '/', 
  usernameExist,
  passwordExist,
  loginController,
);

export default loginRoutes;