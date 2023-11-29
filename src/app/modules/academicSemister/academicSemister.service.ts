import { academicSemisterCodeNameMapper } from "./academicSemister.constant";
import { TAcademicSemister } from "./academicSemister.interface";
import { AcademicSemester } from "./academicSemister.model";

const createAcademicSemisterIntoDB = async (payload: TAcademicSemister) => {



    //semister name   ==== semister code 



    if (academicSemisterCodeNameMapper[payload.name] !== payload.code) {
        throw new Error("Invaid semister code")
    }








    const result = await AcademicSemester.create(payload)
    return result;
}


const getAllSemisterFromDB = async () => {
    const result = await AcademicSemester.find();
    return result;
};

const getSingleSemisterFromDB = async (id: string) => {
    const result = await AcademicSemester.findById(id)
    return result;
};

const updateSingleUserIntoDB = async (semisterId: string, updatedSemisterData: any) => {
    const result = await AcademicSemester.findByIdAndUpdate({ _id: semisterId }, updatedSemisterData, {
        new: true,
        runValidators: true
    })
    return result;
}










export const AcademicSemisterService = {
    createAcademicSemisterIntoDB,
    getAllSemisterFromDB,
    getSingleSemisterFromDB,
    updateSingleUserIntoDB
}