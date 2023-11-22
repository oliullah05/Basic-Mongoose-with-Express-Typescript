import { Request, Response } from "express";
import { studentService } from "./5-student.service";
import studentValidationJoiSchema, { StudentZodSchema } from "./student.validation.joi-zod";




const createStudent = async(req:Request,res:Response)=>{

    try{
        const studentData = req.body.student;


                                 //data validation using joi
    //  const {error,value}=   studentValidationJoiSchema.validate(studentData)
                   //  joi error

    //  if(error){
    //   res.status(500).json({
    //     success:false,
    //      message:"student can't created successfully for joi",
    //      error:error.details
    // })


 
                                  //data valodation using zod
 
               const zodParsedData = StudentZodSchema.parse(studentData)
   



       //will call service function to send this data
       const result = await studentService.createStudentIntoDB(zodParsedData)


   
      
        //send response here
        res.status(200).json({
            success:true,
             message:"student created successfully",
             data:result
        })

      
        }

       catch(err){
        res.status(500).json({
            success:false,
             message:"student can't created successfully",
             error:err
        })
    }

}



const getAllStudents = async(req:Request,res:Response)=>{
   try{
  const result = await studentService.getAllStudentsFromDB() 
  res.status(200).json({
    success:true,
     message:"students are getting successfully",
     data:result
})
   }
   catch(err){
console.log(err);
   }
}


const getSingleStudent = async(req:Request,res:Response)=>{
    try{
        const studentId = req.params.studentId;
      const result = await studentService.getSingleStudentFromDB(studentId);
      res.status(200).json({
        success:true,
         message:"student is getting successfully",
         data:result
    })
    }
    catch(err){
        console.log(err);
    }
}




export const studentControllers ={
    createStudent,
    getAllStudents,
    getSingleStudent
}