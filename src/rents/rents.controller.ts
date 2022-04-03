import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { RentsService } from "./rents.service";
import { RentsEntity } from "./rents.entity";
import { AuthGuard } from "../auth/auth.guard";
import RentDto from "./dto/rent.dto";

@Controller('rents')
export class RentsController {
  constructor(private rentsService: RentsService) {
  }

  @Post()
  @UseGuards(AuthGuard)
  createRent(@Request() request):Promise<RentsEntity> {
    const rentDto: RentDto = {userId: request.user.id, ...request.body};
    return this.rentsService.createRent(rentDto);
  }
}
