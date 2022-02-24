import connection from './connection';
import { ILogin, Login } from './ILogin';

const loginModel = async ({ username, password }: Login): Promise<ILogin> => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );
    
  const [rows] = result as ILogin[];
  
  return rows;
};

export default {
  loginModel,
}; 