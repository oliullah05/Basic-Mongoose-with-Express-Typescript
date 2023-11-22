

                                          
            // 1. Create an interface representing a document in MongoDB.

import { Model } from "mongoose";

export type TGurdian ={
    fatherName:string;
    fatherOccupation:string;
    fatherContactNO:string
    motherName:string;
    motherOccupation:string;
   motherContactNO:string
}

  export type TUserName = {
    firstName:string;
    middleName?:string;
    lastName:string
}
export type TLocalGurdian ={
    name:string;
    occupation:string;
    contactNo:string;
    address:string
}

export type TStudents ={
    id:string;
    password:string;
    name:TUserName;
    gender:"male"|"female"|"other";
    dateOfBirth?:string;
    email: string;
    contactNo :string;
    emergencyContactNo:string;
    blodGroup?:'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress:string;
    parmanentAddress:string;
    gurdian:TGurdian;
    localGurdian:TLocalGurdian;
    profileImage?:string;
    isActive:"active"|"inactive"
  }
                                   //for custom creating instanse

// export type StudentMethods = {
//   isUserExits(id:string):Promise<TStudents|null>
// }

                                        // for creatingStatic method

 export interface StudentModel extends Model<TStudents> {
 isUserExists(id: string): Promise<TStudents | null>;
}


// export type StudentModel = Model<TStudents, Record<string, never>, StudentMethods>;


