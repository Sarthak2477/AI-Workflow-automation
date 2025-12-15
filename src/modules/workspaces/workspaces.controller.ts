import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Post()
  async create(@Body() createWorkspaceDto: CreateWorkspaceDto) {
    return this.workspacesService.create(createWorkspaceDto);
  }

  @Get()
  async findAll() {
    return this.workspacesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.workspacesService.findOne(id);
  }
}