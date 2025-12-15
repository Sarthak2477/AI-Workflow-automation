import { Controller, Post, Body, Put, Delete, Param, Get } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { CreateWorkflowDto } from './dto/createworkflow.dto';
import { UpdateWorkflowDto } from './dto/updateworkflow.dto';
import { CreateWorkflowStepDto } from './dto/workflowsteps.dto';
import { CreateWorkflowStepEdgeDto } from './dto/workflow-step-edges.dto';

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

  @Post('steps')
  async createWorkflowStep(@Body() createStepDto: CreateWorkflowStepDto) {
    return this.workflowsService.createWorkflowStep(createStepDto);
  }

  @Post('edges')
  async createWorkflowStepEdge(@Body() createEdgeDto: CreateWorkflowStepEdgeDto) {
    return this.workflowsService.createWorkflowStepEdge(createEdgeDto);
  }

  @Get(':id/steps')
  async getWorkflowSteps(@Param('id') workflowId: string) {
    return this.workflowsService.getWorkflowSteps(workflowId);
  }

  @Get(':id/edges')
  async getWorkflowStepEdges(@Param('id') workflowId: string) {
    return this.workflowsService.getWorkflowStepEdges(workflowId);
  }
}
