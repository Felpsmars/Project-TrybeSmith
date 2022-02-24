import { Router } from 'express';

import productController from '../controller/products';
import { nameExist, IsNameTypeString, IsNameLengthCorrect } from '../middlewares/Name';
import { amountExist, IsAmountTypeString, IsAmountLengthCorrect } from '../middlewares/Amount';

const productRoutes = Router();

productRoutes.post(
  '/', 
  nameExist,
  IsNameTypeString, 
  IsNameLengthCorrect,
  amountExist,
  IsAmountTypeString,
  IsAmountLengthCorrect,
  productController,
);

export default productRoutes;