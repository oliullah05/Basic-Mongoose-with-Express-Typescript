/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../interface/error';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {

  //setting default values

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong!';



  let errorSources: TErrorSources = [{
    path: "",
    message: "Something went wrong!"
  }]




  const handleZodError = (err: ZodError) => {
    const statusCode = 400;
    const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue?.message
      }
    })



    return {
      statusCode,
      message: "Validation Error",
      errorSources

    }
  }


  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err)
    statusCode=simplifiedError.statusCode;
    message = simplifiedError.message ;
    errorSources= simplifiedError.errorSources
  }












  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack:config.node_env==="development" ?   err?.stack : null
  });
};

export default globalErrorHandler;
