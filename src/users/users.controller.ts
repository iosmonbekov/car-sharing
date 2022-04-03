import { Body, Controller, Get, Post, UseGuards, Request } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserDto } from "./dto/user.dto";
import { UserEntity } from "./user.entity";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth.guard";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private authService: AuthService) {
  }

  @Get()
  @UseGuards(AuthGuard)
  getAllUsers():Promise<UserEntity[]> {
    return this.usersService.getAllUsers();
  }

  @Post('/registration')
  registration(@Body() userDto: UserDto):Promise<string> {
    return this.authService.registration(userDto);
  }

  @Post('/login')
  login(@Body() userDto: UserDto):Promise<string> {
    return this.authService.login(userDto);
  }
}
