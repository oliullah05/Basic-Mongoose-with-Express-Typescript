import { TAcademicSemister } from "../academicSemister/academicSemister.interface"

// year, semister code, 4 digit number
export const genarateStudentId = (payload: TAcademicSemister) => {
    const currentId = (0).toString().padStart(4, "0");

    let incrementId = (Number(currentId) + 1).toString();
    incrementId = `${payload.year}${payload.code}${incrementId}`
    return incrementId;
}