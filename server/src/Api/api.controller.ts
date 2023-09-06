import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateShortUrlDto } from './dto/url.dto';
import { UrlShortnerService } from './urlShortner.service';
import { AuthGuard, InjectUserToRequest } from '../auth/guards';

@Controller()
export default class ApiController {
  constructor(private readonly urlShortner: UrlShortnerService) {}

  @UseGuards(InjectUserToRequest)
  @Post('/url')
  async createShortUrl(@Body() urlData: CreateShortUrlDto, @Req() req: any) {
    return this.urlShortner.create(urlData, req.user);
  }

  @Get('/u/:id')
  async getShortUrl(
    @Param('id') hashedUrl: string,
    @Req() req,
    @Body('password') password: string,
  ) {
    const { id, hash, original_url } = await this.urlShortner.findOne(
      hashedUrl,
      password,
    );
    this.urlShortner.addStats(id, req);

    return { id: String(id), hash, original_url };
  }

  @UseGuards(AuthGuard)
  @Get('links')
  async getLinks(@Req() req, @Query('page') page: number) {
    page ??= 0;

    return this.urlShortner.getLinks(page, req.user.id);
  }

  @UseGuards(AuthGuard)
  @Get('links/:link_id')
  async getSingleLinkDetails(@Req() req, @Param('link_id') link_id) {
    return this.urlShortner.getLinkWithStats(link_id, req.user.id);
  }
}
