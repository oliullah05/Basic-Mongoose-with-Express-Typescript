import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentControllers } from './student.controller';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();
<<<<<<< HEAD

router.get('/', StudentControllers.getAllStudents);
=======
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18

router.get('/:id', StudentControllers.getSingleStudent);

router.patch(
<<<<<<< HEAD
  '/:id',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:id', StudentControllers.deleteStudent);
=======
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18

export const StudentRoutes = router;
