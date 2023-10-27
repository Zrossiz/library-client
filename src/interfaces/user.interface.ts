export interface IUser {
  _id: number;
  userName: string;
  password: string;
  role: "ADMIN" | "USER";
  favorites: number[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
