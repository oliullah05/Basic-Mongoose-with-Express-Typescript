import { Schema, model } from "mongoose";
import { TofferedCourse } from "./offeredCourse.interface";
import { days } from "./offeredCourse.const";

const offeredCourseSchema = new Schema<TofferedCourse>(
    {
      SemesterRegistration: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"SemesterRegistration"
      },
      academicSemester: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"AcademicSemester"
      },
      academicFaculty: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"AcademicFaculty"
      },
      academicDepartment: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"AcademicDepartment"
      },
      course: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Course"
      },
      faculty: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Faculty"
      },
      maxCapacity: {
        type: Number,
        required: true,
      },
      section: {
        type: Number,
        required: true,
      },
      days: {
        type: String,
        enum: days,
        required: true,
      },
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const OfferedCourse = model<TofferedCourse>('OfferedCourse', offeredCourseSchema);
  
  export default OfferedCourse;