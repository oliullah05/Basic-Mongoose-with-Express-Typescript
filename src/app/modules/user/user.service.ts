import mongoose from 'mongoose';
import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { AcademicSemester } from './../academicSemester/academicSemester.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import { AppError } from '../../errors/appErrors';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );


const seasson = await mongoose.startSession()


try{

  seasson.startTransaction()
  //set  generated id
  userData.id = await generateStudentId(admissionSemester);

  // create a user                     //transaction-1
  const newUser = await User.create([userData],{seasson});     //now this is arrey

  //create a student                       







  if (!newUser.length) {
throw new AppError(httpStatus.BAD_REQUEST,"fail to create user")
  }

    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id


    //crate a student                                          ////transaction-2

    const newStudent = await Student.create([payload],{seasson});


if(!newStudent.length){
  throw new AppError(httpStatus.BAD_REQUEST,"fail to create student")
}



await seasson.commitTransaction()
await seasson.endSession()
    return newStudent;
  
}

catch(err){
  await seasson.abortTransaction();
  await seasson.endSession()
}}


export const UserServices = {
  createStudentIntoDB,
}