import express from 'express';
import { AuthValidation } from './auth.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AuthControllers } from './auth.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.const';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.LogInValidationSchema),
  AuthControllers.loginUser,
);

router.post(
  '/change-password',
  auth(USER_ROLE.admin,USER_ROLE.student,USER_ROLE.faculty),
  validateRequest(AuthValidation.ChangePasswordValidationSchema),
  AuthControllers.changePassword,
);


router.post("/refresh-token",validateRequest(AuthValidation.RefreshTokenValidationSchema),AuthControllers.refreshToken)

router.post("/forget-password",validateRequest(AuthValidation.ForgetPasswordValidationSchema),AuthControllers.forgetPassword)

router.post("/reset-password",validateRequest(AuthValidation.ResetPasswordValidationSchema),AuthControllers.resetPassword)



export const AuthRoutes = router;