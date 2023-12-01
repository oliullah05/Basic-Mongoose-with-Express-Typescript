import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';


const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    academicFacultyValidation.academicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);
router.get('/', AcademicFacultyControllers.getAllAcademicFacultys);



router.get(
  '/:FacultyId',
  AcademicFacultyControllers.getSingleAcademicFaculty,
);

router.patch(
  '/:FacultyId',
  validateRequest(
    academicFacultyValidation.academicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
);



export const AcademicFacultyRoutes = router;