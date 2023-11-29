import express from 'express';
import { UserControllers } from './user.controller';

import { studentValidations } from '../student/student.validation';
import validateZodRequest from '../../middlewars/validateZodRequest';


const router = express.Router();







router.post('/create-student', validateZodRequest(studentValidations.createStudentValidationSchema), UserControllers.createStudent);


export const UserRoutes = router;
