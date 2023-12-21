import { TSchedule } from "./offeredCourse.interface"







export const hasTimeConflict = (assignSchedule: TSchedule[], newSchedule: TSchedule) => {



for(const Schedule of assignSchedule){
    const exitingStartTime = new Date(`1970-01-01T${Schedule.startTime}`)
    const exitingEndTime = new Date(`1970-01-01T${Schedule.endTime}`)
    const newStartTime = new Date(`1970-01-01T${newSchedule.startTime}`)
    const newEndTime = new Date(`1970-01-01T${newSchedule.endTime}`)

    if (newStartTime < exitingEndTime && newEndTime > exitingStartTime) {
        return true
    }
}

    return false


}