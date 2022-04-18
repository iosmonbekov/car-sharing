import { Module } from '@nestjs/common';
import { RentsController } from './rents.controller';
import { RentsService } from './rents.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RentsEntity } from "./rents.entity";
import { AuthModule } from "../auth/auth.module";
import { UsersModule } from "../users/users.module";
import { CarsModule } from "../cars/cars.module";
import { TariffsModule } from "../tariffs/tariffs.module";
import { DiscountsModule } from "../discounts/discounts.module";
import RentValidator from "./rent.validator";

@Module({
  imports: [
    TypeOrmModule.forFeature([RentsEntity]), 
    AuthModule, 
    CarsModule,
    UsersModule,
    TariffsModule,
    DiscountsModule
  ],
  controllers: [RentsController],
  providers: [RentsService, RentValidator],
  exports: [RentsService]
})
export class RentsModule {}
