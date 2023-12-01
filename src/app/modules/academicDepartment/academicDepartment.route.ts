import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';


const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    academicDepartmentValidation.academicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);


router.get(
  '/:DepartmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:DepartmentId',
  validateRequest(
    academicDepartmentValidation.updateDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);



export const AcademicDepartmentRoutes = router;