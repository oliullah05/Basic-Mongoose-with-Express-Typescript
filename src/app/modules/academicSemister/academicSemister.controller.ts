

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



const getAllSemister = catchAsync(async (req, res) => {

    const result = await AcademicSemisterService.getAllSemisterFromDB()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semister's are retrieved succesfully",
        data: result
    })

});

const getSingleSemister = catchAsync(async (req, res) => {
    const { semisterId } = req.params;
    const result = await AcademicSemisterService.getSingleSemisterFromDB(semisterId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semister is retrieved succesfully",
        data: result
    })
});


const updateSingleSemister = catchAsync(async (req, res) => {
    const { semisterId } = req.params;
    const updatedData = req.body;
    const result = await AcademicSemisterService.updateSingleUserIntoDB(semisterId, updatedData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semister is updated succesfully",
        data: result
    })
});


export const AcademicSemisterControllers = {
    createAcademicSemister,
    getAllSemister,
    getSingleSemister,
    updateSingleSemister
}