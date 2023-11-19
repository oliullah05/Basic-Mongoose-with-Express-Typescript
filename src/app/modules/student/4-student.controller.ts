import { Request, Response } from "express";
import { studentService } from "./5-student.service";


const createStudent = async(req:Request,res:Response)=>{

    try{

        const studentData = req.body.student;
        // console.log(studentData);
        //will call service function to send this data
        const result = await studentService.createStudentIntoDB(studentData)
        //send response here
        res.status(200).json({
            success:true,
             message:"student created successfully",
             data:result
        })

    }
    catch(err){
        console.log(err);
    }

}


export const studentControllers ={
    createStudent
}