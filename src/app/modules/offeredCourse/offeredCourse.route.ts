import express from 'express';
import { OfferedCourseControllers } from './offeredCourse.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseValidation } from './offeredCourse.validation';


const router = express.Router();

router.get('/', OfferedCourseControllers.getAllOfferedCourses);
router.get('/:id', OfferedCourseControllers.getSingleOfferedCourses);

router.post(
  '/create-offered-course',validateRequest(OfferedCourseValidation.createOfferedCourseSchema),
  OfferedCourseControllers.createOfferedCourse,
);

router.patch('/:id',validateRequest(OfferedCourseValidation.updateOfferedCourseSchema), OfferedCourseControllers.updateOfferedCourse);

router.delete(
  '/:id',

  OfferedCourseControllers.deleteOfferedCourseFromDB,
);

export const OfferedCourseRoutes = router;