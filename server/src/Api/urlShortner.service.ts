import {
  Injectable,
  GoneException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CounterService } from './counter.service';
import { createHash } from './helpers/createHash';
import { CreateShortUrlDto } from './dto/url.dto';
import { Request } from 'express';

@Injectable()
export class UrlShortnerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly counter: CounterService,
  ) {}

  private async generateNewHash() {
    const counterValue = await this.counter.getCounterAndAutoIncr();
    const hash = createHash(counterValue);
    return hash;
  }

  public async create(data: CreateShortUrlDto, user: any) {
    let expiry_date: Date = undefined;
    if (!user) {
      // entity will be expired in 3 hours for unauthenticated user
      expiry_date = new Date(Date.now() + 3 * 60 * 60 * 1000);
      // unauthenticated is not allowed to add password their entities
      delete data.access_code;
    }

    if (user && data.expiresIn) {
      expiry_date = new Date(Date.now() + data.expiresIn);
    }

    const shortLinkResult = await this.prisma.links.create({
      data: {
        hash: await this.generateNewHash(),
        original_url: data.url,
        expiry_date: expiry_date,
        access_code: data.access_code,
        user_id: user?.id,
      },
      select: { hash: true, expiry_date: true, original_url: true },
    });
    return { ...shortLinkResult };
  }

  public async findOne(hashUrl: string, password_authorization?: string) {
    const urlData = await this.prisma.links.findUnique({
      where: { hash: hashUrl },
    });

    if (!urlData) throw new NotFoundException();

    const isUrlExpired =
      urlData.expiry_date && new Date() >= urlData.expiry_date;
    if (isUrlExpired) {
      throw new GoneException('url has been expired');
    }

    if (urlData.access_code && urlData.access_code != password_authorization) {
      throw new UnauthorizedException(
        'this ressource is protected with a password',
      );
    }

    return urlData;
  }

  public async addStats(link_id: number | bigint, req: Request) {
    const user_agent = req.headers['user-agent'];
    const ip_address = req.ip;

    try {
      await this.prisma.$transaction([
        this.prisma.links.update({
          where: { id: link_id },
          data: {
            clicked: { increment: 1 },
          },
        }),
        this.prisma.link_click_history.create({
          data: { link_id, user_agent, ip_address },
        }),
      ]);
    } catch (e) {}
  }

  public async getLinks(page: number, user_id: number) {
    const links = await this.prisma.links.findMany({
      where: { user_id },
      orderBy: { id: 'desc' },
      skip: page * 20 || 0,
      take: 20,
    });

    return links.map((link) => ({ ...link, id: String(link.id) }));
  }

  public async getLinkWithStats(link_id, user_id) {
    const link = await this.prisma.links.findUnique({
      where: {
        id: link_id,
        user_id,
      },

      include: { link_click_history: true },
    });
    if (!link) throw new NotFoundException();

    const link_click_history = link.link_click_history.map((val) => ({
      ...val,
      id: String(val.id),
      link_id: String(link_id),
    }));

    return { ...link, id: String(link.id), link_click_history };
  }
}
