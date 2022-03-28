import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TariffsModule } from './tariffs/tariffs.module';
import { TariffsEntity } from "./tariffs/tariffs.entity";
import { DiscountsModule } from './discounts/discounts.module';
import { DiscountEntity } from "./discounts/discount.entity";
import { CarsModule } from './cars/cars.module';
import { CarEntity } from "./cars/car.entity";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserEntity } from "./users/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'car-sharing',
      entities: [TariffsEntity, DiscountEntity, CarEntity, UserEntity],
      synchronize: true,
    }),
    TariffsModule,
    DiscountsModule,
    CarsModule,
    AuthModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
