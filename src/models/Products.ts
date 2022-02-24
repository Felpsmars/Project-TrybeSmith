import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from './interfaces/IProduct';

const create = async (product: IProduct) => {
  const { name, amount } = product;
  const [rows] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return rows.insertId;
};

export default create;