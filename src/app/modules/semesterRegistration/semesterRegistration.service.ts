import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TSemesterRegistration } from "./semesterRegistration.interface";
import { SemesterRegistration } from "./semesterRegistration.model";

const createSemesterRegistrationIntoDB = async (payload: TSemesterRegistration) => {


//check if there any registered semester that is alrady "UPCOMING" or "ONGOING"

const isThereAnyUpcomingOrOngoing =await SemesterRegistration.findOne({
  $or:[
    {
      status:"UPCOMING"
    },
    {
      status:"ONGOING"
    }
  ]
})


if(isThereAnyUpcomingOrOngoing){
  throw new AppError(404, `there is alrady a ${isThereAnyUpcomingOrOngoing.status} semester register `)
}


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




const updateSemesterRegistrationIntoDB = async (id:string,payload:Partial<TSemesterRegistration>) => {

//check  if the requested semester register is alrady exits

const isAcademicSemesterExits = await SemesterRegistration.findById(id)
if (!isAcademicSemesterExits) {
  throw new AppError(404, "AcademicSemester is not found")
}




//if the requested semester registration is ended ,we will not update anything

const requestedSemisterStatus = isAcademicSemesterExits?.status;
if(requestedSemisterStatus=="ENDED"){
  throw new AppError(404,"this Semester Registration ended.. can't update ")
}


 };




export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationsFromDB,
  updateSemesterRegistrationIntoDB,
};
