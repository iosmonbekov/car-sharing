import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserDto } from "./dto/user.dto";
import { UserEntity } from "./user.entity";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post()
  createUser(@Body() userDto: UserDto):Promise<UserEntity> {
    return this.usersService.createUser(userDto);
  }
}
