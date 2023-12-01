import { z } from 'zod';

const academicDepartmentValidationSchema = z.object({
  body:z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be string',
        required_error:"name must be required"
      }),
      academicFaculty:z.string({
        invalid_type_error: 'academicFaculty must be string',
        required_error:"academicFaculty must be required"
      })
  })
});



const updateDepartmentValidationSchema = z.object({
    body:z.object({
      name: z
        .string({
          invalid_type_error: 'Name must be string'
        }).optional(),
        academicFaculty:z.string({
          invalid_type_error: 'academicFaculty must be string'
        }).optional()
    })
  });






export const academicDepartmentValidation = {
academicDepartmentValidationSchema,
updateDepartmentValidationSchema
};
