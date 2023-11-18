import { Schema, model, connect } from 'mongoose';
import { Students } from './stunent.interface';


const studentSchema = new Schema<Students>({
    id:{type:String},
    name:{
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
    },
    gender:["male","female"], //enum
    dateOfBirth:String,
    email:{type:String,required:true},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    blodGroup:['A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'O+' , 'O-'], //enum
    presentAddress:{type:String,required:true},
    parmanentAddress:{type:String,required:true},
    gurdian:{
        fatherName:{type:String,required:true},
        fatherOccupation:{type:String,required:true},
        fatherContactNO:{type:String,required:true},
        motherName:{type:String,required:true},
        motherOccupation:{type:String,required:true},
        motherContactNO:{type:String,required:true}
    },
    localGurdian:{
        name:{type:String,required:true},
       occupation :{type:String,required:true},
        contactNo:{type:String,required:true},
       address:{type:String,required:true}
    },
    profileImage:String,
    isActive:["active","inactive"]
})