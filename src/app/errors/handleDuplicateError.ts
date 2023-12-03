import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

export const handleDuplicateError =(err:any):TGenericErrorResponse=>{
    const statusCode = 400;
    const match = err.message.match(/name: "(.*?)"/);
// console.log(err.message);
    // Extract the department name or default to null if not found
    const extractedMessage = match ? match[1] : null;
    
  


const errorSources :TErrorSources =[{
    path:"",
    message:err?.message
}]


return{
    statusCode,
    message:`${extractedMessage} is alrady exits`,
    errorSources,
}}
