import express from 'express';
import { AcademicSemisterControllers } from './academicSemister.controller';


const router = express.Router();

router.post("/create-academic-semister", AcademicSemisterControllers.createAcademicSemister)

export const AcademicSemisterRoutes = router;