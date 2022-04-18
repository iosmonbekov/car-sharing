import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RentsEntity } from "../rents/rents.entity";

@Entity({name: 'Users'})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => RentsEntity, rent => rent.user)
  rents: RentsEntity[]
}