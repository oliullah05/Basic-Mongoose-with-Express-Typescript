import { z } from "zod"

const LogInValidationSchema = z.object({
    body: z.object({
        id: z.string({required_error:"Id is required"}),
        password:z.string({required_error:"Passworde is required"})
    })
})

export const AuthValidation = {
    LogInValidationSchema
}