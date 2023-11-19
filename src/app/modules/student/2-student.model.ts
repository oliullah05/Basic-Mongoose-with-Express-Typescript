import { Schema, model } from 'mongoose';
import { Gurdian, LocalGurdian, Students, UserName } from './1-stunent.interface';

                            // 2. Create a Schema corresponding to the document interface.




const userNameSchema = new Schema<UserName>({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
    },
    lastName:{
        type:String,
        required:true
    }
})

const gurdianSchema=new Schema<Gurdian> ({
    fatherName:{type:String,required:true},
    fatherOccupation:{type:String,required:true},
    fatherContactNO:{type:String,required:true},
    motherName:{type:String,required:true},
    motherOccupation:{type:String,required:true},
    motherContactNO:{type:String,required:true}
})

const localGurdianSchema = new Schema<LocalGurdian>({
    name:{type:String,required:true},
   occupation :{type:String,required:true},
    contactNo:{type:String,required:true},
   address:{type:String,required:true}
})



const studentSchema = new Schema<Students>({
    id:{type:String},
    name:userNameSchema,
    gender:["male","female"], //enum
    dateOfBirth:String,
    email:{type:String,required:true},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    blodGroup:['A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'O+' , 'O-'], //enum
    presentAddress:{type:String,required:true},
    parmanentAddress:{type:String,required:true},
    gurdian:gurdianSchema,
    localGurdian:localGurdianSchema,
    profileImage:String,
    isActive:["active","inactive"]
})






                         // 3. Create a Model.
export const StudentModel = model<Students>("Student",studentSchema)














