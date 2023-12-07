import QueryBuilder from "../../builder/QueryBuilder"
import { CourseSearchableFields } from "./course.const"
import { TCourse } from "./course.interface"
import Course from "./course.model"

const createCourseIntoDB = async(payload:TCourse)=>{
const result = await Course.create(payload)
return result
}
const allCoursesIntoDB =async(query:Record<string,unknown>)=>{
  const courseQuery = new QueryBuilder(Course.find().populate("preRequisiteCourses.course"),query)
  .search(CourseSearchableFields)
  .filter()
  .sort()
  .paginate()
  .fields()

    const result = await courseQuery.modelQuery
    return result
}

const getSingleCourseIntoDB =async(id:string)=>{
   
    const result = await Course.findById(id).populate("preRequisiteCourses.course")
    
    return result
}
const deleteCourseFromDB =async(id:string)=>{
    const result = await Course.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true, runValidators: true }
    );
    return result
}





export const CourseServices={
    createCourseIntoDB,
    allCoursesIntoDB ,
    getSingleCourseIntoDB,
    deleteCourseFromDB,

}