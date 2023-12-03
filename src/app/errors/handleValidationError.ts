import mongoose from "mongoose";
import { TErrorSources } from "../interface/error";

export const handleValidationError = (err: mongoose.Error.ValidationError) => {
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
