import { PartialType } from '@nestjs/mapped-types';
import { CreateIntegrationDto } from './createintegration.dto';

export class UpdateIntegrationDto extends PartialType(
  CreateIntegrationDto,
) {}
