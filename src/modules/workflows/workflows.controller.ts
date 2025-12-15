import { Controller, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { CreateWorkflowDto } from './dto/createworkflow.dto';
import { UpdateWorkflowDto } from './dto/updateworkflow.dto';

@Controller('workflows')
export class WorkflowsController {
  constructor(private readonly workflowsService: WorkflowsService) {}

  @Post('create')
  async createWorkflow(@Body() createWorkflowDto: CreateWorkflowDto) {
    return this.workflowsService.createWorkflow(createWorkflowDto);
  }

  @Put(':id')
  async updateWorkflow(@Param('id') id: string, @Body() updateWorkflowDto: UpdateWorkflowDto) {
    return this.workflowsService.updateWorkflow(id, updateWorkflowDto);
  }

  @Delete(':id')
  async deleteWorkflow(@Param('id') id: string) {
    return this.workflowsService.deleteWorkflow(id);
  }
}
