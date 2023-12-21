import { z } from 'zod';
import { days } from './offeredCourse.const';


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
        startTime: z.string().refine(time=>{
          const minuteHourRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
          return minuteHourRegex.test(time)

        },{
          message:"Invalid Time Formet . Expected HH:MM in 24 hour format"
        }),
        endTime: z.string().refine(time=>{
          const minuteHourRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
          return minuteHourRegex.test(time)

        },{
          message:"Invalid Time Formet . Expected HH:MM in 24 hour format"
        }),
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
      faculty: z.string().optional(),
      maxCapacity: z.number().int().positive().optional(),
      days: z.array(z.enum([...days] as [string, ...string[]])).optional(),
      startTime: z.string().refine(time=>{
        const minuteHourRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        return minuteHourRegex.test(time)

      },{
        message:"Invalid Time Formet . Expected HH:MM in 24 hour format"
      }).optional(),
      endTime: z.string().refine(time=>{
        const minuteHourRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        return minuteHourRegex.test(time)

      },{
        message:"Invalid Time Formet . Expected HH:MM in 24 hour format"
      }).optional(),
    }).optional(),
  });


  export const OfferedCourseValidation = {
    createOfferedCourseSchema,
    updateOfferedCourseSchema
  }

