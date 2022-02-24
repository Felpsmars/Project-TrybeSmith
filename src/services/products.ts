import IProduct from '../models/interfaces/IProduct';
import { create, getAllProducts } from '../models/Products';

const createService = async ({ name, amount }: IProduct) => {
  const productId = await create({ name, amount });
  
  return productId;
};

const getAllService = async () => {
  const all = await getAllProducts();
  
  return all;
};

export {
  createService,
  getAllService,
};