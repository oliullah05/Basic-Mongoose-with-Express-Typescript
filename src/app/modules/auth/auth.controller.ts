import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User is logged in succesfully!',
        data:result
      });
  });
const changePassword = catchAsync(async (req, res) => {

const user = req.user;
const {...passwordData}= req.body;

  const result = await AuthServices.changePassword(user,passwordData)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Password change succesfully!',
        data:null
      });
  });


  
export const AuthControllers = {
    loginUser,
    changePassword
  };