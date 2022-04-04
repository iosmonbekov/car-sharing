import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
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

  @Column({type: "float"})
  payment: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => CarEntity, car => car.rents)
  @JoinColumn()
  car: CarEntity;

  @ManyToOne(() => TariffsEntity, tariff => tariff.rents)
  @JoinColumn()
  tariff: TariffsEntity;

  @ManyToOne(() => DiscountEntity, discount => discount.rents)
  @JoinColumn()
  discount: DiscountEntity;
}