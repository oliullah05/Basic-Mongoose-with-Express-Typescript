import { TAcademicSemister } from "./academicSemister.interface";
import { AcademicSemester } from "./academicSemister.model";

const createAcademicSemisterIntoDB = async (payload: TAcademicSemister) => {
    const result = await AcademicSemester.create(payload)
    return result;
}


export const AcademicSemisterService = {
    createAcademicSemisterIntoDB
}