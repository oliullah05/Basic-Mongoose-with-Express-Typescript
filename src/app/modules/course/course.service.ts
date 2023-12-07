import { TCourse } from "./course.interface"
import Course from "./course.model"

const createCourseIntoDB = async(payload:TCourse)=>{
const result = await Course.create(payload)
return result
}
const allCoursesIntoDB =async()=>{
    const result = await Course.find()
    return result
}

const getSingleCourseIntoDB =async(id:string)=>{
    const result = await Course.findById(id)
    return result
}
const deleteCourseFromDB =async(id:string)=>{
    const result = await Course.findByIdAndUpdate(id,{
        isDeleted:true
    },{
        new:true,
        runValidators:true
    })
    return result
}





export const CourseServices={
    createCourseIntoDB,
    allCoursesIntoDB ,
    getSingleCourseIntoDB,
    deleteCourseFromDB,

}