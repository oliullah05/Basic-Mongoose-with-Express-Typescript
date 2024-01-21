import { Types } from "mongoose"

export type TLogInUser = {
    id:Types.ObjectId;
    password:string;
}