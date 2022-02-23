import { ResultSetHeader } from 'mysql2';

import connection from './connection';

import { IUser, User } from './IUser';

const getAll = async (): Promise<IUser[]> => {
  const [data] = await connection.execute('SELECT username, FROM Users');
  return data as IUser[];
};

const getById = async (id: number): Promise<IUser> => {
  const [data] = await connection.execute('SELECT username, FROM Users WHERE id=?', [id]);
  const [row] = data as IUser[];

  return row;
};

const create = async (user: IUser): Promise<User> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)', 
    [username, classe, level, password],
  );
  const { insertId: id } = result;

  const insertedUser: User = { id, username, classe, level, password };

  return insertedUser;
};

const update = async (id: number, user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;
  
  await connection.execute(
    'UPDATE Users SET username=?, classe=?, level=?, password=?, WHERE id=?', 
    [username, classe, level, password, id],
  );
  
  const updatedUser: User = { id, username, classe, level, password };

  return updatedUser;
};

const remove = async (id: number): Promise<void> => {
  await connection.execute(
    'DELETE FROM Users WHERE id=?', 
    [id],
  );
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};