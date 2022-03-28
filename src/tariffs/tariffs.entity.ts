import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
}