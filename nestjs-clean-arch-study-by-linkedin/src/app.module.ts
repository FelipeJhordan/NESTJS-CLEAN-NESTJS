// src/app.module.ts

import { Module } from '@nestjs/common';
import { UserRepository } from './core/repositories/user.repository';
import { UsersCacheMemoryRepository } from './data/cache-memory/users-cache-memory-repository';
import { UsersControllers } from './presentation/user.controller';
import { CreateUserUseCase } from './use-cases/create-user.usecase';
import { GetAllUsersUseCase } from './use-cases/get-all-users-usecase';

@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    CreateUserUseCase,
    GetAllUsersUseCase,
  ],
})
export class AppModule {}
