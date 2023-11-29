import { Schema, model } from 'mongoose';
import { TAcademicSemister, TAcademicSemisterMonths, TAcademicSemisterName } from './academicSemister.interface';


const academicSemisterName: TAcademicSemisterName[] = ['autumn', 'summer', 'fall'];
const academicSemisterMonth: TAcademicSemisterMonths[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']




const academicSemesterSchema = new Schema<TAcademicSemister>({
    name: { type: String, enum: academicSemisterName, required: true, trim: true },
    code: { type: String, enum: ['01', '02', '03'], required: true },
    year: { type: Date, required: true },
    startMonth: { type: String, enum: academicSemisterMonth, required: true, },
    endMonth: { type: String, enum: academicSemisterMonth, required: true },
});




export const AcademicSemester = model<TAcademicSemister>("AcademicSemester", academicSemesterSchema)