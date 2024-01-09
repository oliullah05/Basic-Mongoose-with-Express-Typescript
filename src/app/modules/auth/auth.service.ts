import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogInUser } from "./auth.interface";
import jwt, { JwtPayload } from "jsonwebtoken"
import bcrypt from "bcrypt"
import { configDotenv } from "dotenv";
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



const changePassword = async(userData:JwtPayload,payload:{
  oldPassword:string,
  newPassword:string
})=>{
//if the user exits
const user = await User.isUserExitsByCustomId(userData.userId)

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


const isPasswordMatched =await  User.isPasswordMatched(payload.oldPassword,user.password)
if(!isPasswordMatched){
  throw new AppError(403,"password do not match")
}


//hasedNewPassword
const newHashedPassword =await bcrypt.hash(payload.newPassword,Number(config.bcrypt_salt_rounds))





 await User.findOneAndUpdate({
  id:userData.userId,
  role:userData.role
},{
  password:newHashedPassword,
  needsPasswordChange:false,
  passwordChangeAt:new Date()
})
console.log("object");
return null;
}






  export const AuthServices = {
    loginUser,
    changePassword
  };

  