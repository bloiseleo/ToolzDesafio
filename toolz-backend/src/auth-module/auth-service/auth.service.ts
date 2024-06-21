import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import {compareSync} from 'bcrypt';
import LoginError from 'src/errors/LoginError';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}
    async login(username: string, password: string) {
        const user = await this.userRepository.findOneBy({
            username
        });
        if(user == null) {
            throw new LoginError("Usuário ou senha incorretos");
        }
        if(!compareSync(password, user.password)) {
            throw new LoginError("Usuário ou senha incorretos");
        };
        return;
    }
}
