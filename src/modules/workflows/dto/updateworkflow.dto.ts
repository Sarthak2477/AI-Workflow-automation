// src/workflows/dto/update-workflow.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkflowDto } from './createworkflow.dto';
export class UpdateWorkflowDto extends PartialType(CreateWorkflowDto) {}
