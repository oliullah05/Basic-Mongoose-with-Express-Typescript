import { Schema, model } from 'mongoose';
import { Gurdian, LocalGurdian, Students, UserName } from './1-stunent.interface';

                            // 2. Create a Schema corresponding to the document interface.




const userNameSchema = new Schema<UserName>({
    firstName:{
        type:String,
        trim:true,
        required:[true,"first name is required"],
        maxlength:[50,"first name cant be more then 20 characters"]
    },
    middleName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true,
        required:[true,"last name is required"]
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
    id:{type:String,required:true,unique:true},
    name:{
        type:userNameSchema,
        required:[true,"name is required"]
    },
    gender:{
        type:String,
        enum:{
            values:["male","female","other"],
            message:"{VALUE} is not correct . Gender must be in male or female or other"  //error mesage
        },
        required:true
    }, 
    dateOfBirth:String,
    email:{type:String,required:true,unique:true},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    blodGroup:{
        type:String,
        enum:['A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'O+' , 'O-']
    }, 
    presentAddress:{type:String,required:true},
    parmanentAddress:{type:String,required:true},
    gurdian:{
        type:gurdianSchema,
        required:true
    },
    localGurdian:{
        type:localGurdianSchema,
        required:true
    },
    profileImage:String,
    isActive:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    }

})







                         // 3. Create a Model.
export const StudentModel = model<Students>("Student",studentSchema)














