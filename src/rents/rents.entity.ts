import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { UserEntity } from "../users/user.entity";
import { CarEntity } from "../cars/car.entity";
import { TariffsEntity } from "../tariffs/tariffs.entity";
import { DiscountEntity } from "../discounts/discount.entity";

@Entity({name: 'Rents'})
export class RentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'date', default: new Date()})
  created_date: Date;

  @Column({type: 'date'})
  from: Date;

  @Column({type: 'date'})
  to: Date;

  @Column()
  payment: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @OneToOne(() => CarEntity)
  @JoinColumn()
  car: CarEntity;

  @OneToOne(() => TariffsEntity)
  @JoinColumn()
  tariff: TariffsEntity;

  @OneToOne(() => DiscountEntity)
  @JoinColumn()
  discount: DiscountEntity;
}