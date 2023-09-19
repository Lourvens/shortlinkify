import { Transform, Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
  MinLength,
} from 'class-validator';

export class CreateShortUrlDto {
  @IsUrl({ require_valid_protocol: true })
  url: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'expiresIn must be a number in minutes' })
  @Min(5, { message: 'expiresIn must be at least 5 minutes' })
  @Transform(({ value }) => value * 60 * 1000) //Convert minutes into milliseconds
  @IsOptional()
  expiresIn: number;

  @MinLength(4)
  @IsString()
  @IsOptional()
  access_code: string;
}
