import express from 'express';
import { AcademicSemisterControllers } from './academicSemister.controller';
import validateZodRequest from '../../middlewars/validateZodRequest';
import { AcademicSemistervalidations } from './academicSemister.validation';


const router = express.Router();

router.post("/create-academic-semister", validateZodRequest(AcademicSemistervalidations.createAcademicSemistervalidationSchema), AcademicSemisterControllers.createAcademicSemister)

export const AcademicSemisterRoutes = router;