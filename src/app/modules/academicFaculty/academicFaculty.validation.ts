import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Name must be string',
    })
    .max(20, { message: 'Name can not be more than 20 characters' }),
});

export const academicFacultyValidation = {
    academicFacultyValidationSchema,
};
