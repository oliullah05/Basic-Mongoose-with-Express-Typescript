import { TAcademicSemister } from "./academicSemister.interface";
import { AcademicSemester } from "./academicSemister.model";

const createAcademicSemisterIntoDB = async (payload: TAcademicSemister) => {



    //semister name   ==== semister code 
    type TAcademicSemisterCodeNameMapper = {
        [key: string]: string
    }
    const academicSemisterCodeNameMapper: TAcademicSemisterCodeNameMapper = {
        autumn: "01",
        summer: "02",
        fall: "03"

    }

    if (academicSemisterCodeNameMapper[payload.name] !== payload.code) {
        throw new Error("Invaid semister code")
    }








    const result = await AcademicSemester.create(payload)
    return result;
}


export const AcademicSemisterService = {
    createAcademicSemisterIntoDB
}