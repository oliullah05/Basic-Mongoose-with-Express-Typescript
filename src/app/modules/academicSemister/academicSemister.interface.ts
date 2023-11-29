
export type TAcademicSemisterMonths =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';

export type TAcademicSemisterName = 'autumn' | 'summer' | 'fall'

export type TAcademicSemisterCode = "01" | "02" | "03"

export type TAcademicSemister = {
    name: TAcademicSemisterName,
    code: TAcademicSemisterCode,
    year: Date,
    startMonth: TAcademicSemisterMonths,
    endMonth: TAcademicSemisterMonths
}