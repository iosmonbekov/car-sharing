import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RentsEntity } from "../rents/rents.entity";

@Entity({name: 'Discounts'})
export class DiscountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  discount: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @OneToMany(() => RentsEntity, rent => rent.discount)
  rents: RentsEntity[];
}