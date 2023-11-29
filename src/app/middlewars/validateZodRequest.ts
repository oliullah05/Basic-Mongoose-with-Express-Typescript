import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

const validateZodRequest = (schema: AnyZodObject) => {


    return async (req: Request, res: Response, next: NextFunction) => {

        //validation
        try {
            await schema.parseAsync({
                body: req.body
            })
            next()
        }
        catch (err) {
            return next(err)
        }

    }
}

export default validateZodRequest;