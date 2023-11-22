// creating a schema validation using joi
import Joi from "joi"


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
  const studentValidationJoiSchema = Joi.object({
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

  export default studentValidationJoiSchema;