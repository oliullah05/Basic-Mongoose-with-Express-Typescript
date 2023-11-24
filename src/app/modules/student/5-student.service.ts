import { string } from 'joi';
import { TStudents } from './1-stunent.interface';
import { Student } from './2-student.model';

const createStudentIntoDB = async (studentData: TStudents) => {
  // build in static method

  if (await Student.isUserExists(studentData.id)) {
    throw new Error('user alrady exists');
  }
  //build in static method
  const result = await Student.create(studentData);
  //      console.log(result,"service");

  // build in instance method
  // const student = new Student(studentData)   //create an custom instanse
  // if(await student.isUserExits(studentData.id)){
  //     throw new Error("user alrady exists")
  // }
  // const result = await   student.save()

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({_id:id});
  // return result;

  //using aggrigate

  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const result = await Student.updateOne(
    { _id: id },
    { $set: { isDeleted: true } },
  );
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
