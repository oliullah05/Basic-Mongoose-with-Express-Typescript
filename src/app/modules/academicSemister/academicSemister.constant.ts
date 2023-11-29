import { TAcademicSemisterCode, TAcademicSemisterCodeNameMapper, TAcademicSemisterMonths, TAcademicSemisterName } from "./academicSemister.interface";

export const academicSemisterName: TAcademicSemisterName[] = ['autumn', 'summer', 'fall'];
export const academicSemisterMonth: TAcademicSemisterMonths[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const academicSemisterCode: TAcademicSemisterCode[] = ['01', '02', '03'];

export const academicSemisterCodeNameMapper: TAcademicSemisterCodeNameMapper = {
    autumn: "01",
    summer: "02",
    fall: "03"

}