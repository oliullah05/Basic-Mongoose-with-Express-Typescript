
import{ Schema, model } from "mongoose";
import { TCourse, TCourseFaculties, TPreRequisiteCourses } from "./course.interface";



const preRequisiteCoursesSchema = new Schema<TPreRequisiteCourses>({
course:{
    type:Schema.Types.ObjectId,  
    ref:"Course"
},
isDeleted:{
    type:Boolean,
    default:false
}
})


const courseSchema = new Schema<TCourse>({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        unique:true,
        trim:true
    },
    prefix: {
        type: String,
        required: [true, 'Prefix is required.'],
        trim:true
    },
    code: {
        type: Number,
        required: [true, 'Code is required.'],
        trim:true
    },
    credits: {
        type: Number,
        required: [true, 'Credits is required.'],
        trim:true
    },
preRequisiteCourses:[preRequisiteCoursesSchema],
isDeleted:{
    type:Boolean,
    default:false
}
});


const Course=model<TCourse>('Course', courseSchema);

export default Course;






const courseFacultiesSchema = new Schema<TCourseFaculties>({
    course: {
        type: Schema.Types.ObjectId,
        required: [true, 'course is required.'],
        ref:"Course",
        unique:true
    },
    faculties:{
        type:[{
            type:Schema.Types.ObjectId,
            ref:"Faculty"
        }]
    }
  
});



export const CourseFaculty=model<TCourseFaculties>('CourseFaculty', courseFacultiesSchema);
