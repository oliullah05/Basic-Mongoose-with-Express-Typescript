// creating a schema validation using joi
import Joi from "joi"
import { z } from "zod";


const userNameJoiSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .required()
      .max(50)
      .regex(/^[A-Z][a-z]*$/, { name: 'first name' })
      .messages({
        'string.base': '{#label} must be a string',
        'string.empty': '{#label} is required',
        'string.max': '{#label} cannot be more than {#limit} characters',
        'string.pattern.base': '{#label} must start with a capital letter',
      }),
    middleName: Joi.string().trim(),
    lastName: Joi.string()
      .trim()
      .required()
      .regex(/^[a-zA-Z]+$/)
      .messages({
        'string.base': '{#label} must be a string',
        'string.empty': '{#label} is required',
        'string.pattern.base': '{#label} must only contain letters',
      }),
  });
  
  // Define Joi schema for gurdian
  const gurdianJoiSchema = Joi.object({
    fatherName: Joi.string().required().max(1),
    fatherOccupation: Joi.string().required(),
    fatherContactNO: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNO: Joi.string().required(),
  });
  
  // Define Joi schema for localGurdian
  const localGurdianJoiSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
  });
  
  // Define Joi schema for student
  export const studentValidationJoiSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameJoiSchema.required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    dateOfBirth: Joi.string(),
    email: Joi.string().email().required(),
    contactNo: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    blodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
    presentAddress: Joi.string().required(),
    parmanentAddress: Joi.string().required(),
    gurdian: gurdianJoiSchema.required(),
    localGurdian: localGurdianJoiSchema.required(),
    profileImage: Joi.string(),
    isActive: Joi.string().valid('active', 'inactive').default('active'),
  });












  const UserNameZodSchema = z.object({
    firstName: z.string().min(1).max(50),
    middleName: z.string().optional(),
    lastName: z.string().min(1),
  });
  
  const GurdianZodSchema = z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherContactNO: z.string(),
    motherName: z.string(),
    motherOccupation: z.string(),
    motherContactNO: z.string(),
  });
  
  const LocalGurdianZodSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
  });
  
  export const StudentZodSchema = z.object({
    id: z.string(),
    password:z.string().max(20),
    name: UserNameZodSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string(),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    blodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: z.string(),
    parmanentAddress: z.string(),
    gurdian: GurdianZodSchema,
    localGurdian: LocalGurdianZodSchema,
    profileImage: z.string().optional(),
    isActive: z.enum(['active', 'inactive']).default('active'),
  });

