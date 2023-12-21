import { z } from 'zod';
import { days } from './offeredCourse.const';



const timeStringValidationSchema = z.string().refine(time=>{
  const minuteHourRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return minuteHourRegex.test(time)

},{
  message:"Invalid Time Formet . Expected HH:MM in 24 hour format"
})

// Define the main schema for TofferedCourse
const createOfferedCourseSchema = z.object({
    body:z.object({
      semesterRegistration: z.string(),
        academicFaculty: z.string(),
        academicDepartment: z.string(),
        course: z.string(),
        faculty: z.string(),
        maxCapacity: z.number().int().positive(),
        section: z.number().int().positive(),
        days: z.array(z.enum([...days] as [string, ...string[]])),
        startTime: timeStringValidationSchema,
        endTime: timeStringValidationSchema,
      }).refine(body=>{
        const start = new Date(`1970-01-01T${body.startTime}:00`)
        const end = new Date(`1970-01-01T${body.endTime}`)
      return end>start
      },{
        message:"end time is wrong"
      })


});
const updateOfferedCourseSchema = z.object({
    body: z.object({
      faculty: z.string(),
      maxCapacity: z.number().int().positive(),
      days: z.array(z.enum([...days] as [string, ...string[]])),
      startTime: timeStringValidationSchema,
      endTime: timeStringValidationSchema,
    }).refine(body=>{
      const start = new Date(`1970-01-01T${body.startTime}:00`)
      const end = new Date(`1970-01-01T${body.endTime}`)
    return end>start
    },{
      message:"end time is wrong"
    }),
  });


  export const OfferedCourseValidation = {
    createOfferedCourseSchema,
    updateOfferedCourseSchema
  }

