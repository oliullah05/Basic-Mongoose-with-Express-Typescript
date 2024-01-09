import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogInUser } from "./auth.interface";
import bcrypt from "bcrypt"

const loginUser = async (payload: TLogInUser) => {


//if the user exits
const isUserExits = await User.findOne({id:payload.id})

if(!isUserExits){
  throw new AppError(404,"user not found")
}

// check if the user is alrady deleted

if(isUserExits.isDeleted){
  throw new AppError(403,"user is deleted")
}

// check if the user is alrady blocked

if(isUserExits.status==="blocked"){
  throw new AppError(403,"user is blocked")
}

// checking if the password is correct
const isPasswordMatched =await  bcrypt.compare(payload.password,isUserExits.password)
console.log(isPasswordMatched,44);







// Access grented : send access token , refresh token



  };
  export const AuthServices = {
    loginUser
  };

  