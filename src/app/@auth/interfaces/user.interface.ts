export interface IUser {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin';
  avatar: string;
}
