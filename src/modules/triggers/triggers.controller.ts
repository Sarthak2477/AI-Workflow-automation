import { Controller } from '@nestjs/common';
import { TriggersService } from './triggers.service';

@Controller('triggers')
export class TriggersController {
  constructor(private readonly triggersService: TriggersService) {}
}