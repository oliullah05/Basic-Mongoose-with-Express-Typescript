import AppError from "../../errors/AppError";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TSemesterRegistration } from "./semesterRegistration.interface";
import { SemesterRegistration } from "./semesterRegistration.model";

const createSemesterRegistrationIntoDB = async (payload:TSemesterRegistration) => {

  //check if the AcademicSemester exits
  const isAcademicSemesterExits = await AcademicSemester.findById(payload.academicSemester)
if(!isAcademicSemesterExits){
throw new AppError(404,"AcademicSemester not found")
}






//check duplicate semesterRegistration 

const checkDuplicateSemisterRegistration = await SemesterRegistration.findOne({
  academicSemester:payload.academicSemester
})
if(checkDuplicateSemisterRegistration){
  throw new AppError(409,"This Semester Registration is alrady register")
}



};

const getAllSemesterRegistrationsFromDB = async () => {};

const getSingleSemesterRegistrationsFromDB = async () => {};

const updateSemesterRegistrationIntoDB = async () => {};

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationsFromDB,
  updateSemesterRegistrationIntoDB,
};
