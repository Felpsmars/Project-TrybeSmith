import { Router } from 'express';

import createUserController from '../controller/user';
import { usernameExist, IsTypeString, IsLengthCorrect } from '../middlewares/Username';
import { classeExist, IsClasseTypeString, IsClasseLengthCorrect } from '../middlewares/Classe';
import { levelExist, IsLevelTypeNumber, IsLevelLengthCorrect } from '../middlewares/Level';
import { passwordExist, IsPasswordTypeString, IsPasswordLengthCorrect }
  from '../middlewares/Password';

const userRoutes = Router();

userRoutes.post(
  '/', 
  usernameExist,
  IsTypeString,
  IsLengthCorrect,
  classeExist,
  IsClasseTypeString,
  IsClasseLengthCorrect,
  levelExist,
  IsLevelTypeNumber,
  IsLevelLengthCorrect,
  passwordExist,
  IsPasswordTypeString,
  IsPasswordLengthCorrect,
  createUserController,
);

export default userRoutes;