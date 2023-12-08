import { z } from 'zod';


const preRequisiteCoursesValidationSchema = z.object({
    course:z.string(),
    isDeleted:z.boolean().optional().default(false)
})
const updatePreRequisiteCoursesValidationSchema = z.object({
    course:z.string().optional(),
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


const updateCourseValidationSchema = z.object({
    body:z.object({
        title:z.string().optional(),
        prefix:z.string().optional(),
        code:z.number().optional(),
        credits:z.number().optional(),
        preRequisiteCourses:z.array(updatePreRequisiteCoursesValidationSchema).optional(),
        isDeleted:z.boolean().default(false).optional()
    }).optional()
    })


    const facultiesWithCourseValidationSchema =z.object({
        body: z.object({
            faculties:z.array(z.string()),
           
        })
    })

export const CourseValidations = {
    createCourseValidationSchema,
    updateCourseValidationSchema,
    facultiesWithCourseValidationSchema
}