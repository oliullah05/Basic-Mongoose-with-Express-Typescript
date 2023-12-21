import { Types } from "mongoose";

export type Days = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

export type TofferedCourse = {
    semesterRegistration: Types.ObjectId;
    academicSemester?: Types.ObjectId;
    academicFaculty: Types.ObjectId;
    academicDepartment: Types.ObjectId;
    course: Types.ObjectId;
    faculty: Types.ObjectId;
    maxCapacity: number;
    section: number;
    days: Days[];
    startTime: string;
    endTime: string;
}
export type TSchedule = {
    days:Days[],
    startTime:string,
    endTime:string

}