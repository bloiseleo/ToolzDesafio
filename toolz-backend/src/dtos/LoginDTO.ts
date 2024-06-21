import { IsNotEmpty } from "class-validator";

export class LoginDTO {
    @IsNotEmpty({
        message: 'Username deve ser preenchido'
    })
    username: string;
    @IsNotEmpty({
        message: 'password deve ser preenchido'
    })
    password: string;
}