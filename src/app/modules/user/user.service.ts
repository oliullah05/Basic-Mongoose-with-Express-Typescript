import config from "../../config";
import { TAcademicSemister } from "../academicSemister/academicSemister.interface";
import { AcademicSemester } from "../academicSemister/academicSemister.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

import { User } from "./user.model";
import { genarateStudentId } from "./user.utils";


const createStudentIntoDB = async (password: string, payload: TStudent) => {

  // create a user object
  const userData: Partial<TUser> = {}


  //if password is not given ,we use default password
  userData.password = password || config.default_password as string

  const admissionSemister = await AcademicSemester.findById(payload.admissionSemister)

  //set student rule
  userData.role = "student";

  if (!admissionSemister) {
    throw new Error("admission not found")
  }


  //set manually genarated id
  userData.id = genarateStudentId(admissionSemister)

  //create a user
  const newUser = await User.create(userData);




  if (Object.keys(payload).length) {
    //set id ,_id as user
    payload.id = newUser.id;
    payload.user = newUser._id;   //referance id

    const newStudent = await Student.create(payload)


    return newStudent
  }










};

export const UserService = {
  createStudentIntoDB
}