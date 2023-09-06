import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards';
import { CreateUser } from './dto/user-dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  async registerUser(@Body() user: CreateUser) {
    return this.auth.createUser(user.username, user.password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginUser(@Req() req: any) {
    return this.auth.createAccessToken(req.user);
  }
}
