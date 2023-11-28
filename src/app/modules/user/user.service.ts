import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

import { User } from "./user.model";

const createStudentIntoDB = async (password:string,studentData: TStudent) => {

  // create a user object
  const  userData:Partial<TUser> ={}


//if password is not given ,we use default password
userData.password = password || config.default_password as string

//set student rule
userData.role="student";

//set manually genarated id
userData.id="20301000005"

//create a user
const newUser = await User.create(userData);




if(Object.keys(studentData).length){
  //set id ,_id as user
   studentData.id=newUser.id;
   studentData.user=newUser._id;   //referance id

const newStudent = await Student.create(studentData)

return newStudent
}










  };

  export const UserService ={
    createStudentIntoDB 
  }