import { User } from './users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { Ingrediente } from './ingredientes/entities/ingrediente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Edpa%2022',
      database: 'rolesdb',
      entities: [Ingrediente],
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
    IngredientesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
