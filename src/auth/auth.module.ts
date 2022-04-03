import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { AuthGuard } from "./auth.guard";

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [AuthService, AuthGuard],
  exports: [AuthService, AuthGuard]
})
export class AuthModule {}
