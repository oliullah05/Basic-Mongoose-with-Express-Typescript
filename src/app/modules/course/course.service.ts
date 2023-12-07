import mongoose from "mongoose"
import QueryBuilder from "../../builder/QueryBuilder"
import { CourseSearchableFields } from "./course.const"
import { TCourse } from "./course.interface"
import Course from "./course.model"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"

const createCourseIntoDB = async (payload: TCourse) => {
    const result = await Course.create(payload)
    return result
}
const allCoursesIntoDB = async (query: Record<string, unknown>) => {
    const courseQuery = new QueryBuilder(Course.find().populate("preRequisiteCourses.course"), query)
        .search(CourseSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields()

    const result = await courseQuery.modelQuery
    return result
}

const getSingleCourseIntoDB = async (id: string) => {

    const result = await Course.findById(id).populate("preRequisiteCourses.course")

    return result
}
const deleteCourseFromDB = async (id: string) => {
    const result = await Course.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true, runValidators: true }
    );
    return result
}

const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {
    const { preRequisiteCourses, ...courseRemainingData } = payload;

    const session = await mongoose.startSession()

    session.startTransaction()
try{



    const updatedBasicCourseInfo = await Course.findByIdAndUpdate(id, courseRemainingData, {
        new: true,
        runValidators: true,
        session
    })


if(!updatedBasicCourseInfo){
    throw new AppError(httpStatus.BAD_REQUEST,"fail to update course")
}








    //check if there is any preRequisite courses to update
    if (preRequisiteCourses && preRequisiteCourses.length > 0) {
        //filter out the deletd files
        const deletedPreRequisites = preRequisiteCourses.filter(elem => elem.course && elem.isDeleted).map(el => el.course)
        const deletedPreRequisiteCoures = await Course.findByIdAndUpdate(id, {
            $pull: {
                preRequisiteCourses: { course: { $in: deletedPreRequisites } },
            },
        },
            {
                new: true,
                runValidators: true,
                session
            }
        
        )



        if(!deletedPreRequisiteCoures){
            throw new AppError(httpStatus.BAD_REQUEST,"fail to update course")
        }

        //filter out the new course filds
        const newPreRequisites = preRequisiteCourses?.filter(
            (el) => el.course && !el.isDeleted
        );


        const newPreRequisiteCourses = await Course.findByIdAndUpdate(id, {
            $addToSet: { preRequisiteCourses: { $each: newPreRequisites } }
        },
            {
                new: true,
                runValidators: true,
                session
            })

            if(!newPreRequisiteCourses){
                throw new AppError(httpStatus.BAD_REQUEST,"fail to update course")
            }

            session.commitTransaction();
            session.endSession()
    }
}
catch(err){
session.abortTransaction()
session.endSession()
}

    const result = await Course.findById(id).populate("preRequisiteCourses.course")
    return result;
}



export const CourseServices = {
    createCourseIntoDB,
    allCoursesIntoDB,
    getSingleCourseIntoDB,
    deleteCourseFromDB,
    updateCourseIntoDB

}