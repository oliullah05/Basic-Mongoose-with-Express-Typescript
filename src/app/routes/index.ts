import express from "express"
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";
import { AcademicSemisterRoutes } from "../modules/academicSemister/academicSemister.route";


const router = express.Router()


const moduleRoutes = [
    {
        path: "/students",
        route: StudentRoutes
    },

    {
        path: "/users",
        route: UserRoutes
    },
    {
        path: "/academic-semister",
        route: AcademicSemisterRoutes
    },
]


moduleRoutes.forEach(route => router.use(route.path, route.route))



export default router;