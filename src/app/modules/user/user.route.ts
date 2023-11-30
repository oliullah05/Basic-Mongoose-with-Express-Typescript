import express from 'express';
import { UserControllers } from './user.controller';

import { studentValidations } from '../student/student.validation';
import validateZodRequest from '../../middlewars/validateZodRequest';


const router = express.Router();





// validateZodRequest(studentValidations.createStudentValidationSchema),

router.post('/create-student', UserControllers.createStudent);


export const UserRoutes = router;
