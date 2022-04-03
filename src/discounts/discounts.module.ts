import { Module } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { DiscountsController } from './discounts.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiscountEntity } from "./discount.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DiscountEntity])],
  providers: [DiscountsService],
  controllers: [DiscountsController],
  exports: [DiscountsService]
})
export class DiscountsModule {}
