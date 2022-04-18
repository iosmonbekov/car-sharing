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
import { RentsModule } from './rents/rents.module';
import { RentsEntity } from "./rents/rents.entity";
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'car-sharing',
      entities: [TariffsEntity, DiscountEntity, CarEntity, UserEntity, RentsEntity],
      synchronize: true,
    }),
    TariffsModule,
    DiscountsModule,
    CarsModule,
    AuthModule,
    UsersModule,
    RentsModule,
    StatisticsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
