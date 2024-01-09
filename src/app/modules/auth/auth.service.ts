
import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogInUser } from "./auth.interface";
import jwt from "jsonwebtoken"

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


//create token and send to the client
// require('crypto').randomBytes(64).toString('hex')

const jwtPayload ={
  userId:user.id,
  role:user.role
}

const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn: '10d'});




// Access grented : send access token , refresh token

return{
  accessToken,
  needsPasswordChange:user.needsPasswordChange
}

  };
  export const AuthServices = {
    loginUser
  };

  