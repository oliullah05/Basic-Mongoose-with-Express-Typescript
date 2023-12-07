/* eslint-disable @typescript-eslint/no-explicit-any */
<<<<<<< HEAD
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};

export default handleDuplicateError;
=======

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
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
