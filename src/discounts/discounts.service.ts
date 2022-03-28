import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DiscountEntity } from "./discount.entity";
import { Repository } from "typeorm";
import DiscountDto from "./dto/discount.dto";

@Injectable()
export class DiscountsService {
  constructor(@InjectRepository(DiscountEntity) private discountRepository: Repository<DiscountEntity>) {
  }

  getAllDiscounts():Promise<DiscountEntity[]> {
    return this.discountRepository.find();
  }

  createDiscount(discountDto: DiscountDto):Promise<DiscountEntity> {
    const discount = this.discountRepository.create(discountDto);
    return this.discountRepository.save(discount);
  }
}
