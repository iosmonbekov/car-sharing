import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { RentsEntity } from "./rents.entity";
import { Repository } from "typeorm";
import RentDto from "./dto/rent.dto";
import { UsersService } from "../users/users.service";
import { TariffsService } from "../tariffs/tariffs.service";
import { CarsService } from "../cars/cars.service";
import { DiscountsService } from "../discounts/discounts.service";
import { DiscountEntity } from "../discounts/discount.entity";

@Injectable()
export class RentsService {
  constructor(
    @InjectRepository(RentsEntity) private rentsRepository: Repository<RentsEntity>,
    private usersService: UsersService,
    private tariffsService: TariffsService,
    private carsService: CarsService,
    private discountsService: DiscountsService
  ) {}

  async createRent(rentDto: RentDto):Promise<any> {
    //const rent = this.rentsRepository.create(rentDto);
    //return this.rentsRepository.save(rent);
    const discount = await this.getRentDiscount(rentDto.from, rentDto.to);
    return 'testing'
  }

  private async getRentDiscount(from, to):Promise<DiscountEntity> {
    const dateDifference = Number(new Date(to)) - Number(new Date(from));
    const period = this.getDayFromMilliseconds(dateDifference);

    const discount = await this.discountsService.getDiscountByPeriod(period);
    const car = await this.carsService;

    return ;
  }

  private getDayFromMilliseconds(milliseconds):number {
    return milliseconds / (1000 * 60 * 60 * 24);
  }
}
