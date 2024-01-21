/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";

export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
export interface UserModel extends Model<TUser> {
  // myStaticMethod(): number
  isUserExitsByCustomId(id:Types.ObjectId):Promise<TUser>;
  isPasswordMatched(plainTextPassword:string,hashedPassword:string):Promise<boolean> |null
}