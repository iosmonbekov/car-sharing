import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
  }

  createUser(userDto: UserDto):Promise<UserEntity> {
    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }


  async findUserByEmail(email: string):Promise<UserEntity> {
    const user = this.userRepository.findOne({email});
    console.log(user);
    return user;
  }
}
