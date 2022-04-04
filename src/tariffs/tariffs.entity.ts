import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RentsEntity } from "../rents/rents.entity";


@Entity({name: 'Tariffs'})
export class TariffsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  period: number;

  @Column()
  distance: number;

  @OneToMany(() => RentsEntity, rents => rents.tariff)
  rents: RentsEntity[];
}