
import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';


const academicDeparmentSchema = new Schema<TAcademicDepartment>(
 {
    name:{
        type:String,
        required:true,
        unique:true
    },
    academicFaculty:{
        type:Schema.Types.ObjectId,
        required:true, 
        ref:"AcademicFaculty"
    }
 },{
    timestamps:true
 }
);

academicDeparmentSchema.pre("save",async function(next){
const isDepartmentExits = await AcademicDepartment.findOne({
    name:this.name
  })
  
  if(isDepartmentExits){
   throw new Error("this department is alrady exits")
  }
  next()
})

academicDeparmentSchema.pre("findOneAndUpdate",async function(next){
const query = this.getQuery();
const isDepartmentExits = await AcademicDepartment.findOne(query)
  
  if(!isDepartmentExits){
   throw new Error("this department doesn't exits")
  }
  next()
})









export const  AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment', academicDeparmentSchema);





  
  
  