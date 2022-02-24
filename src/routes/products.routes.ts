import { Router } from 'express';

import { createProduct, getAllProduct } from '../controller/products';
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
  createProduct,
);

productRoutes.get(
  '/', 
  getAllProduct,
);

export default productRoutes;