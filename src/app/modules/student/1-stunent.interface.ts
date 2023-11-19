

                                          
            // 1. Create an interface representing a document in MongoDB.

export type Gurdian ={
    fatherName:string;
    fatherOccupation:string;
    fatherContactNO:string
    motherName:string;
    motherOccupation:string;
   motherContactNO:string
}

  export type UserName = {
    firstName:string;
    middleName:string;
    lastName:string
}
export type LocalGurdian ={
    name:string;
    occupation:string;
    contactNo:string;
    address:string
}

export type Students ={
    id:string;
    name:UserName;
    gender:"male"|"female";
    dateOfBirth?:string;
    email: string;
    contactNo :string;
    emergencyContactNo:string;
    blodGroup?:'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress:string;
    parmanentAddress:string;
    gurdian:Gurdian;
    localGurdian:LocalGurdian;
    profileImage?:string;
    isActive:"active"|"inactive"
  }







