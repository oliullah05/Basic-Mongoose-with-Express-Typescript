

import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicSemisterService } from "./academicSemister.service";


const createAcademicSemister = catchAsync(async (req, res) => {
    // const { password, student: studentData } = req.body;
    // const zodParsedData = studentValidationSchema.parse(studentData);
    const result = await AcademicSemisterService.createAcademicSemisterIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semister is created succesfully",
        data: result
    })


});


export const AcademicSemisterControllers = {
    createAcademicSemister

}