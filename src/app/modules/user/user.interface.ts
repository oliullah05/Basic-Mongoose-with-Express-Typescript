/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";
<<<<<<< HEAD
=======
import { USER_ROLE } from "./user.const";
>>>>>>> 41dfd11a7afc42e2885787772cb3b3c08cbec6eb

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
  isUserExitsByCustomId(id:Types.ObjectId):Promise<TUser>;
  isPasswordMatched(plainTextPassword:string,hashedPassword:string):Promise<boolean> |null
<<<<<<< HEAD
}
=======
}


export type TUserRole = keyof typeof USER_ROLE
>>>>>>> 41dfd11a7afc42e2885787772cb3b3c08cbec6eb
