
import { Students } from "./1-stunent.interface";
import { StudentModel } from "./2-student.model";


const createStudentIntoDB =async(student:Students)=>{
const result = await StudentModel.create(
    student
)
console.log(result,"service");
return result;
}


const getAllStudentsFromDB = async()=>{
    const result = await StudentModel.find();
    return result;
}


const getSingleStudentFromDB = async(id:string)=>{
    const result = await StudentModel.findOne({_id:id});
    return result;
}

export const studentService ={
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB
}