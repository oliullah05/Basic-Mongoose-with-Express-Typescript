<<<<<<< HEAD
import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};

export default handleCastError;
=======
import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

export const handleCastError =(err:mongoose.Error.CastError):TGenericErrorResponse=>{
    const statusCode = 400;

const errorSources :TErrorSources =[{
    path:err?.path,
    message:err?.message
}]


return{
    statusCode,
    message:"Invalid ID",
    errorSources,
}}
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
