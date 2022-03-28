import { Body, Controller, Get, Post } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CarEntity } from "./car.entity";
import CarDto from "./dto/car.dto";

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {
  }

  @Get()
  getAllCars():Promise<CarEntity[]> {
    return this.carsService.getAllCars();
  }

  @Post()
  createCar(@Body() carDto: CarDto):Promise<CarEntity> {
    return this.carsService.createCar(carDto);
  }
}
