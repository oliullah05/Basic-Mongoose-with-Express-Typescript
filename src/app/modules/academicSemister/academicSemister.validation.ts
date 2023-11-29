import { z } from 'zod';
import { academicSemisterCode, academicSemisterMonth, academicSemisterName } from './academicSemister.constant';




const createAcademicSemistervalidationSchema = z.object({
    body: z.object({
        name: z.enum([...academicSemisterName] as [string, ...string[]]),
        code: z.enum([...academicSemisterCode] as [string, ...string[]]),
        year: z.string(),
        startMonth: z.enum([...academicSemisterMonth] as [string, ...string[]]),
        endMonth: z.enum([...academicSemisterMonth] as [string, ...string[]]),
    })
});



export const AcademicSemistervalidations = { createAcademicSemistervalidationSchema }


