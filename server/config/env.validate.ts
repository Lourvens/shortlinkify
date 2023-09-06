import { Type, plainToInstance } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';

export class EnvironmentVariables {
  @Type(() => Number)
  @IsNumber()
  PORT: number;

  @IsString({})
  DATABASE_URL: string;

  @Type(() => String)
  @IsString()
  ACCESS_TOKEN_KEY: string;

  @IsString()
  ACCESS_TOKEN_EXPIRES_IN: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
