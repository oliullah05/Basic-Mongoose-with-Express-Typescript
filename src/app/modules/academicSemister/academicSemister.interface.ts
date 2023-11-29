
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



export type TAcademicSemister = {
    name: TAcademicSemisterName,
    code: "01" | "02" | "03",
    year: Date,
    startMonth: TAcademicSemisterMonths,
    endMonth: TAcademicSemisterMonths
}