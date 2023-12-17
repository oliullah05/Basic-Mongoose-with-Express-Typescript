import mongoose, { Schema } from 'mongoose';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistionStatus } from './semesterRegistration.const';



const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>(
  {
    academicSemester:{
      type:Schema.Types.ObjectId,
      unique:true,
      required:true,
      ref:"AcademicSemister"
    },
    startDate:{
      type:Date,
      required:true,
    },
    endDate:{
      type:Date,
      required:true,
    },
    minCredit:{
      type:Number,
      required:true,
      default:3
    },
    maxCredit:{
      type:Number,
      required:true,
      default:15
    },
   
    status:{
      type:String,
      enum:SemesterRegistionStatus,
      default:"UPCOMING"
    }
  },{
    timestamps:true
  }
);

export const SemesterRegistration = mongoose.model<TSemesterRegistration>(
  'SemesterRegistration',
  semesterRegistrationSchema,
);
