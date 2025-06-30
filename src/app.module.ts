import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Edpa%2022',
      database: 'rolesdb',
      entities: [__dirname + `/**/*.entity{.ts,.js}`],
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
