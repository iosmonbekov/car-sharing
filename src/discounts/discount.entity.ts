import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Discounts'})
export class DiscountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  discount: number;

  @Column()
  dayFrom: number;

  @Column()
  dayTo: number;
}