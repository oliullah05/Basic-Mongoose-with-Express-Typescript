import express from 'express';
import { AcademicSemisterControllers } from './academicSemister.controller';
import validateZodRequest from '../../middlewars/validateZodRequest';
import { AcademicSemistervalidations } from './academicSemister.validation';


const router = express.Router();

router.post("/create-academic-semister", validateZodRequest(AcademicSemistervalidations.createAcademicSemistervalidationSchema), AcademicSemisterControllers.createAcademicSemister)


router.get("/academic-semister", AcademicSemisterControllers.getAllSemister)


router.get("/academic-semister/:semisterId", AcademicSemisterControllers.getSingleSemister)
router.patch("/academic-semister/:semisterId", AcademicSemisterControllers.updateSingleSemister)






export const AcademicSemisterRoutes = router;