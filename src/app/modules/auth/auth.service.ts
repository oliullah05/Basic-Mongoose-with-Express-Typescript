import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogInUser } from "./auth.interface";
import bycrpt from "bcrypt"
import { createToken } from "./auth.utils";
import { sendEmail } from "../../utils/sendEmail";
const loginUser = async (payload: TLogInUser) => {


  //if the user exits
  const user = await User.isUserExitsByCustomId(payload.id)

  if (!user) {
    throw new AppError(404, "user not found")
  }

  // check if the user is alrady deleted

  if (user.isDeleted) {
    throw new AppError(403, "user is deleted")
  }

  // check if the user is alrady blocked

  if (user.status === "blocked") {
    throw new AppError(403, "user is blocked")
  }


  // checking if the password is correct


  const isPasswordMatched = await User.isPasswordMatched(payload.password, user.password)
  if (!isPasswordMatched) {
    throw new AppError(403, "password do not match")
  }







  // create token and send to the client

  const jwtPayload = {
    userId: user.id,
    role: user.role
  }


  const accessToken = createToken(jwtPayload, config.jwt_access_secret as string, config.jwt_acess_exparire_in as string)




  const refreshToken = createToken(jwtPayload, config.jwt_refresh_secret as string, config.jwt_refresh_exparie_in as string)

  return {
    accessToken: accessToken,
    needsPasswordChange: user.needsPasswordChange,
    refreshToken
  }

};


const changePassword = async (userData: JwtPayload, payload: {
  oldPassword: string,
  password: string
}) => {


  //if the user exits
  const user = await User.isUserExitsByCustomId(userData.userId)

  if (!user) {
    throw new AppError(404, "user not found")
  }

  // check if the user is alrady deleted

  if (user.isDeleted) {
    throw new AppError(403, "user is deleted")
  }

  // check if the user is alrady blocked

  if (user.status === "blocked") {
    throw new AppError(403, "user is blocked")
  }


  // checking if the password is correct


  const isPasswordMatched = await User.isPasswordMatched(payload.oldPassword, user.password)
  if (!isPasswordMatched) {
    throw new AppError(403, "password do not match")
  }

  //hased new password 
  const newHashedPassword = await bycrpt.hash(payload.password, Number(config.bcrypt_salt_rounds))





  const result = await User.findOneAndUpdate({
    id: userData.userId,
    role: userData.role
  }, {
    password: newHashedPassword,
    needsPasswordChange: false,
    passwordChangeAt: new Date()
  }, {
    new: true
  })
  return result
}


const refreshToken = async (token: string) => {

  // check if the token is valid


  const decoded = jwt.verify(token, config.jwt_refresh_secret as string) as JwtPayload;

  const { userId, iat } = decoded



  //if the user exits
  const user = await User.isUserExitsByCustomId(userId)

  if (!user) {
    throw new AppError(404, "user not found")
  }

  // check if the user is alrady deleted

  if (user.isDeleted) {
    throw new AppError(403, "user is deleted")
  }

  // check if the user is alrady blocked

  if (user.status === "blocked") {
    throw new AppError(403, "user is blocked")
  }


  if (user.passwordChangeAt && User.isJWTIssedBeforePasswordChanged(user.passwordChangeAt, iat as number)) {
    throw new AppError(403, "You are not authorized!")
  }

  // create token and send to the client

  const jwtPayload = {
    userId: user.id,
    role: user.role
  }


  const accessToken = createToken(jwtPayload, config.jwt_access_secret as string, config.jwt_acess_exparire_in as string)

  return {
    accessToken
  }

}

const forgetPassword = async(userId:string)=>{
//if the user exits
const user = await User.isUserExitsByCustomId(userId)

if (!user) {
  throw new AppError(404, "user not found")
}

// check if the user is alrady deleted

if (user.isDeleted) {
  throw new AppError(403, "user is deleted")
}

// check if the user is alrady blocked

if (user.status === "blocked") {
  throw new AppError(403, "user is blocked")
}

 // create token and send to the client

 const jwtPayload = {
  userId: user.id,
  role: user.role
}


const resetToken = createToken(jwtPayload, 
  config.jwt_access_secret as string, 
  "10m")


const resetUILink = `http://localhost:5173/api/v1/id=${user.id}&token=${resetToken}`
console.log(resetUILink);

sendEmail()
}







export const AuthServices = {
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword
};

