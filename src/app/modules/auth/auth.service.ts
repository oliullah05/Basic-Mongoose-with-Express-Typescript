import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogInUser } from "./auth.interface";

const loginUser = async (payload: TLogInUser) => {


//if the user exits
const user = await User.isUserExitsByCustomId(payload.id)

if(!user){
  throw new AppError(404,"user not found")
}









// check if the user is alrady deleted

if(user.isDeleted){
  throw new AppError(403,"user is deleted")
}

// check if the user is alrady blocked

if(user.status==="blocked"){
  throw new AppError(403,"user is blocked")
}




// checking if the password is correct


const isPasswordMatched =await  User.isPasswordMatched(payload.password,user.password)
if(!isPasswordMatched){
  throw new AppError(403,"password do not match")
}







// create token and send to the client

const jwtPayload = {
  userId:user.id,
  role:user.role
}


const accessToken = jwt.sign(jwtPayload,config.jwt_access_secret as string,{expiresIn:"10d"})

return {
  accessToken:accessToken,
  needsPasswordChange:user.needsPasswordChange
}

  };


const changePassword =(user:JwtPayload,payload)=>{
const result = User.findOneAndUpdate({
  id:user.userId,
  role:user.role
})

}






  export const AuthServices = {
    loginUser,
    changePassword
  };

  