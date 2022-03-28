import { Module } from '@nestjs/common';
import { TariffsService } from './tariffs.service';
import { TariffsController } from './tariffs.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TariffsEntity } from "./tariffs.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TariffsEntity])],
  providers: [TariffsService],
  controllers: [TariffsController],
})
export class TariffsModule {}
