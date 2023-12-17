import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { SemesterRegistrationService } from './semesterRegistration.service';


const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    
    const result = await SemesterRegistrationService.createSemesterRegistrationIntoDB(req.body)
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is created successfully!',
      data: result,
    });
  },
);

const getAllSemesterRegistrations = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SemesterRegistrationService.getAllSemesterRegistrationsFromDB(req.query)
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Semester Registration are getting succeccfully',
      data: result,
    });
  },
);

const getSingleSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result =await SemesterRegistrationService.getSingleSemesterRegistrationsFromDB(id)
     console.log(result);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is getting successfully',
      data: result,
    });
  },
);

const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =await SemesterRegistrationService.updateSemesterRegistrationIntoDB(id,req.body)
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is updated successfully',
      data: result,
    });
  },
);

export const SemesterRegistrationController = {
  createSemesterRegistration,
  updateSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
};
