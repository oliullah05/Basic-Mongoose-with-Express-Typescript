import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../errors/AppError";
import jwt, { JwtPayload } from "jsonwebtoken"
import config from "../config";
import { TUserRole } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";



const auth = (...requiredRules: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;

        // if the token is sent from the client

        if (!token) {
            throw new AppError(401, "You are not authorized!")
        }

        // check if the token is valid


        const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;

        const {role,userId,iat} = decoded



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


        if(user.passwordChangeAt && User.isJWTIssedBeforePasswordChanged(user.passwordChangeAt,iat as number)){
            throw new AppError(403, "You are not authorized!")
        }

 
        if (requiredRules && !requiredRules.includes(role)) {
            throw new AppError(403, "You are not authorized!")
        }


        // 
        req.user = decoded as JwtPayload;
        next()




    })
}


export default auth;