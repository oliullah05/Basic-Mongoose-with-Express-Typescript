/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";
import { USER_ROLE } from "./user.const";
export  type TUserRole = keyof typeof USER_ROLE

export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
  passwordChangeAt?:Date
};
export interface UserModel extends Model<TUser> {
  // myStaticMethod(): number
  isUserExitsByCustomId(id:string):Promise<TUser>;
  isPasswordMatched(plainTextPassword:string,hashedPassword:string):Promise<boolean> |null;
  isJWTIssedBeforePasswordChanged(passwordChangedTimeStamp:Date,JwtissuedTimeStamp:number):boolean

}
