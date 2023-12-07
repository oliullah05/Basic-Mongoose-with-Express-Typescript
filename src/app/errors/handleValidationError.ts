<<<<<<< HEAD
import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleValidationError;
=======
import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";



export const handleValidationError = (err: mongoose.Error.ValidationError): TGenericErrorResponse=> {
    const statusCode = 400;

    const errorSources: TErrorSources = Object.values(err.errors).map(
        (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
          return {
            path: val?.path,
            message: val?.message,
          };
        },
      );

    // Rest of your code...

    // For example, you might want to return the errorSources or do something else with them.



return{
    statusCode,
    message:"Validation Error",
    errorSources,
}}
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
