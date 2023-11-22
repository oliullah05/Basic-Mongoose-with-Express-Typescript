import { Schema, model } from 'mongoose';
import { TGurdian, TLocalGurdian, TStudents, TUserName, StudentModel } from './1-stunent.interface';
import validator from 'validator';

                            // 2. Create a Schema corresponding to the document interface.




export const userNameSchema = new Schema<TUserName>({
    firstName:{
        type:String,
        trim:true,
        required:[true,"first name is required"],
        maxlength:[50,"first name cant be more then 20 characters"],
        validate:{
            validator:function(value:string){
                const firstLatterCapitalize =value.charAt(0).toUpperCase() + value.slice(1);
               return value === firstLatterCapitalize
                },
                message:"{VALUE} ,first charecters must be capital latter"    
        }
    },
    middleName:{
        type:String,
        trim:true
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last name is required"],
        validate: {
          validator: (value:string) => validator.isAlpha(value),
          message: "{VALUE} is not valid alpha"
        }
      }
})

export const gurdianSchema=new Schema<TGurdian> ({
    fatherName:{type:String,required:true},
    fatherOccupation:{type:String,required:true},
    fatherContactNO:{type:String,required:true},
    motherName:{type:String,required:true},
    motherOccupation:{type:String,required:true},
    motherContactNO:{type:String,required:true}
})

export const localGurdianSchema = new Schema<TLocalGurdian>({
    name:{type:String,required:true},
   occupation :{type:String,required:true},
    contactNo:{type:String,required:true},
   address:{type:String,required:true}
})



export const studentSchema = new Schema<TStudents,StudentModel>({
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
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
          validator:  (value:string)=>validator.isEmail(value),
          message:"{VALUE} is not correct email"
        }
    
    
    
    
    
    },
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




























//creating custom instanse method

// studentSchema.methods.isUserExits= async function(id:string){
//     const exitingUser = await Student.findOne({id})
//     return exitingUser
// }


//creating custom static method

studentSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await Student.findOne({ id });
    return existingUser;
  };

                         // 3. Create a Model.
export const Student = model<TStudents,StudentModel>("Student",studentSchema)















