export interface IUser {
  classe: string,
  level: number,
  username: string,
  password: string,
}
  
export interface User extends IUser {
  id: number
}