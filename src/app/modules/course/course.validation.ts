import { z } from 'zod';


const preRequisiteCoursesValidationSchema = z.object({
    course:z.string(),
    isDeleted:z.boolean().optional().default(false)
})


const createCourseValidationSchema = z.object({
body:z.object({
    title:z.string(),
    prefix:z.string(),
    code:z.number(),
    credits:z.number(),
    preRequisiteCourses:z.array(preRequisiteCoursesValidationSchema).optional(),
    isDeleted:z.boolean().default(false)
})
})


export const CourseValidations = {
    createCourseValidationSchema
}