"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const _3_stunent_routes_1 = require("./app/modules/student/3-stunent.routes");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application route
app.use('/api/v1/students', _3_stunent_routes_1.studentRoutes); //api/v1/students/create-student
// const getAController = (req: Request, res: Response)=>{
//   const a=10;
//   res.send(a)
//   }
// app.get("/",getAController)
app.get('/', (req, res) => {
    res.send("server is running");
});
exports.default = app;
// console.log(process.cwd());
