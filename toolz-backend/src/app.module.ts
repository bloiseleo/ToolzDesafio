import { Module, OnModuleInit } from '@nestjs/common';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';
import { hashSync } from 'bcrypt';
import { Repository } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (serivce: ConfigService) => {
        const database = serivce.getOrThrow('DB_DATABASE');
        return {
          type: 'postgres',
          host: serivce.getOrThrow('DB_HOST'),
          port: serivce.getOrThrow('DB_PORT'),
          username: serivce.getOrThrow('DB_USERNAME'),
          password: serivce.getOrThrow('DB_PASSWORD'),
          database,
          entities: [User],
          synchronize: true
        }
      }
    }),
    TypeOrmModule.forFeature([User]),
    AuthModuleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  onModuleInit() {
    this.createDefaultUser();
  }
  private async createDefaultUser() {
    const user = await this.userRepository.findOneBy({
      username: 'toolz'
    })
    if(user != null) {
      console.log("User already created!");
      return;
    }
    const userCreated = new User("toolz", hashSync("toolz", 10));
    this.userRepository.save(userCreated);
    console.log("User toolz created successfully");
  }
}
