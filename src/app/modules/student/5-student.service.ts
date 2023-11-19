
import { Students } from "./1-stunent.interface";
import { StudentModel } from "./2-student.model";


const createStudentIntoDB =async(student:Students)=>{
const result = await StudentModel.create(
    student
)
console.log(result,"service");
return result;
}

export const studentService ={
    createStudentIntoDB
}