import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is created succesfully',
    data: result,
  });
});

const getAllAcademicFacultys = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Facultys are retrieved successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { FacultyId } = req.params;
  const result =
    await AcademicFacultyServices.getSingleAcademicFacultyFromDB(FacultyId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is retrieved succesfully',
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { FacultyId } = req.params;
  const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(
    FacultyId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is updated succesfully',
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFacultys,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
