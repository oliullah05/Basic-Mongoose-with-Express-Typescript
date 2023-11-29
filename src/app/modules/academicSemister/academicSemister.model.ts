import { Schema, model } from 'mongoose';
import { academicSemisterCode, academicSemisterMonth, academicSemisterName } from './academicSemister.constant';
import { TAcademicSemister } from './academicSemister.interface';






const academicSemesterSchema = new Schema<TAcademicSemister>({
    name: { type: String, enum: academicSemisterName, required: true, trim: true },
    code: { type: String, enum: academicSemisterCode, required: true },
    year: { type: Date, required: true },
    startMonth: { type: String, enum: academicSemisterMonth, required: true, },
    endMonth: { type: String, enum: academicSemisterMonth, required: true },
});




export const AcademicSemester = model<TAcademicSemister>("AcademicSemester", academicSemesterSchema)