import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async createUser(username, password) {
    try {
      const hashPassword = await argon2.hash(password);
      const newUser = await this.prisma.users.create({
        data: { username, password: hashPassword },
      });

      return { id: newUser.id, username };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ConflictException('username is already taken');
        }
      }
      throw e;
    }
  }

  async validateUser(username: string, password: string) {
    const user = await this.prisma.users.findUnique({
      where: { username },
    });

    if (!user) throw new UnauthorizedException('username not found');

    if (!(await argon2.verify(user.password, password)))
      throw new UnauthorizedException('username or password is incorrect');

    return { id: user.id, username };
  }

  async createAccessToken(user: any) {
    return {
      access_token: await this.jwt.signAsync(user),
    };
  }
}
