import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarEntity } from "./car.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity])],
  providers: [CarsService],
  controllers: [CarsController],
  exports: [CarsService]
})
export class CarsModule {}
