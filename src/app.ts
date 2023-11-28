/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors';
import express, { Application, Request, Response, NextFunction } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import { globalErrorHandler } from './app/middlewars/globalErrorHandler';
import { notFound } from './app/middlewars/notFound';
import router from './app/routes';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/', router);


const getAController = (req: Request, res: Response) => {

  res.send("server is running");
};

app.get('/', getAController);







//global error handling

app.use(globalErrorHandler);
app.use(notFound);

export default app;
