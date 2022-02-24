import IProduct from '../models/interfaces/IProduct';
import create from '../models/Products';

const createService = async ({ name, amount }: IProduct) => {
  const productId = await create({ name, amount });
  
  return productId;
};

export default {
  createService,
};