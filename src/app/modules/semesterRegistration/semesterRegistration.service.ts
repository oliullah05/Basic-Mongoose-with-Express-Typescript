import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TSemesterRegistration } from "./semesterRegistration.interface";
import { SemesterRegistration } from "./semesterRegistration.model";

const createSemesterRegistrationIntoDB = async (payload: TSemesterRegistration) => {

  //check if the AcademicSemester exits
  const isAcademicSemesterExits = await AcademicSemester.findById(payload.academicSemester)
  if (!isAcademicSemesterExits) {
    throw new AppError(404, "AcademicSemester not found")
  }

  //check duplicate semesterRegistration 

  const checkDuplicateSemisterRegistration = await SemesterRegistration.findOne({
    academicSemester: payload.academicSemester
  })
  if (checkDuplicateSemisterRegistration) {
    throw new AppError(409, "This Semester Registration is alrady register")
  }

  const result = await SemesterRegistration.create(payload)
  return result
};



const getAllSemesterRegistrationsFromDB = async (query: Record<string, unknown>) => {

  const semesterRegistrationQuery = new QueryBuilder(SemesterRegistration.find().populate("academicSemester"),query).filter().sort().paginate().fields()

  const result = await semesterRegistrationQuery.modelQuery
  return result
};


const getSingleSemesterRegistrationsFromDB = async (id:string) => {
  const result = await SemesterRegistration.findById(id)
  return result
 
 };




const updateSemesterRegistrationIntoDB = async (id:string) => {




 };




export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationsFromDB,
  updateSemesterRegistrationIntoDB,
};
