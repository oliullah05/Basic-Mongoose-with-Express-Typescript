import { z } from 'zod';
import { days } from './offeredCourse.const';


// Define the main schema for TofferedCourse
const createOfferedCourseSchema = z.object({
    body:z.object({
        SemesterRegistration: z.string(),
        academicSemester: z.string(),
        academicFaculty: z.string(),
        academicDepartment: z.string(),
        course: z.string(),
        faculty: z.string(),
        maxCapacity: z.number().int().positive(),
        section: z.number().int().positive(),
        days: z.enum([...days] as [string, ...string[]]),
        startTime: z.string(),
        endTime: z.string(),
      })
});
const updateOfferedCourseSchema = z.object({
    body: z.object({
      faculty: z.string().optional(),
      maxCapacity: z.number().int().positive().optional(),
      days: z.enum([...days] as [string, ...string[]]).optional(),
      startTime: z.string().optional(),
      endTime: z.string().optional(),
    }).optional(),
  });


  export const OfferedCourseValidation = {
    createOfferedCourseSchema,
    updateOfferedCourseSchema
  }

