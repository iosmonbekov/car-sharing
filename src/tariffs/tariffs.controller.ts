import { Body, Controller, Get, Post } from "@nestjs/common";
import TariffDto from "./dto/tariff.dto";
import { TariffsService } from "./tariffs.service";
import { TariffsEntity } from "./tariffs.entity";

@Controller('tariffs')
export class TariffsController {

  constructor(private tariffsService: TariffsService) {
  }

  @Get()
  getAllTariffs():Promise<TariffsEntity[]> {
    return this.tariffsService.getAllTariffs();
  }

  @Post()
  createTariff(@Body() tariffDto: TariffDto):Promise<TariffsEntity> {
    return this.tariffsService.createTariff(tariffDto)
  }
}
