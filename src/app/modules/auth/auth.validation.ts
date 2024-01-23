import { z } from "zod"

const LogInValidationSchema = z.object({
    body: z.object({
        id: z.string({required_error:"Id is required"}),
        password:z.string({required_error:"Password is required"})
    })
})


const ChangePasswordValidationSchema = z.object({
    body: z.object({
     oldPassword:z.string({required_error:"Password is required"}),
     password:z.string({required_error:"Password is required"})
    })
})




const RefreshTokenValidationSchema = z.object({
    cookies:z.object({
        refreshToken:z.string({
            required_error:"Refresh token is required"
        })
    })
})


const ForgetPAsswordValidationSchema = z.object({
    body:z.object({
        id:z.string({required_error:"User Id is required!"})
    })
})









export const AuthValidation = {
    LogInValidationSchema,
    ChangePasswordValidationSchema,
    RefreshTokenValidationSchema,
    ForgetPAsswordValidationSchema
}