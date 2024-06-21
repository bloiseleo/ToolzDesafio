import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from 'src/dtos/LoginDTO';
import { AuthService } from '../auth-service/auth.service';
import { ResponseDTO } from 'src/dtos/ResponseDTO';
import LoginError from 'src/errors/LoginError';

@Controller('auth')
export class AuthController {
    constructor(
        private service: AuthService
    ) {}
    @Post()
    async login(@Body() data: LoginDTO): Promise<ResponseDTO> {
        try {
            await this.service.login(data.username, data.password);
            return new ResponseDTO("Usuário autenticado com sucesso", "", 200);
        } catch(error: unknown) {
            if(error instanceof LoginError) {
                return new ResponseDTO(error.message, error.message, 401);
            }
            return new ResponseDTO("Erro inesperado. Contate o administrador", "Erro inesperado. Contate o administrador", 500);
        }
    }
}
