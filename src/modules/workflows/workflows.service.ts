import { Injectable } from '@nestjs/common';
import { CreateWorkflowDto } from './dto/createworkflow.dto';
import { UpdateWorkflowDto } from './dto/updateworkflow.dto';
import { CreateWorkflowStepDto } from './dto/workflowsteps.dto';
import { CreateWorkflowStepEdgeDto } from './dto/workflow-step-edges.dto';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/database/supabase.service';

@Injectable()
export class WorkflowsService {
    constructor(private readonly supabase: SupabaseService) {}
    
    async createWorkflow(createWorkflow: CreateWorkflowDto){
        const {data, error} = await this.supabase.getClient().from('workflows').insert({
            workspace_id: createWorkflow.workspaceId,
            name: createWorkflow.name,
            status: createWorkflow.status,
            trigger_type: createWorkflow.triggerType,
            trigger_config: createWorkflow.triggerConfig,
        });
        if (error) throw new Error(error.message);
        return { data };
    }

    async findAll() {
        const {data, error} = await this.supabase.getClient().from('workflows').select('*');
        if (error) throw new Error(error.message);
        return { data };
    }

    async findOne(id: string) {
        const {data, error} = await this.supabase.getClient().from('workflows').select('*').eq('id', id).single();
        if (error) throw new Error(error.message);
        return { data };
    }

    async updateWorkflow(id: string, updateWorkflow: UpdateWorkflowDto) {
        const {data, error} = await this.supabase.getClient().from('workflows').update({
            workspace_id: updateWorkflow.workspaceId,
            name: updateWorkflow.name,
            status: updateWorkflow.status,
            trigger_type: updateWorkflow.triggerType,
            trigger_config: updateWorkflow.triggerConfig,
        }).eq('id', id);
        if (error) throw new Error(error.message);
        return { data };
    }

    async deleteWorkflow(id: string) {
        const {data, error} = await this.supabase.getClient().from('workflows').delete().eq('id', id);
        if (error) throw new Error(error.message);
        return { data };
    }

    async createWorkflowStep(createStepDto: CreateWorkflowStepDto) {
        const {data, error} = await this.supabase.getClient().from('workflow_steps').insert({
            workflow_id: createStepDto.workflow_id,
            step_order: createStepDto.step_order,
            type: createStepDto.type,
            integration_id: createStepDto.integration_id,
            connection_id: createStepDto.connection_id,
            action: createStepDto.action,
            config: createStepDto.config,
        });
        if (error) throw new Error(error.message);
        return { data };
    }

    async createWorkflowStepEdge(createEdgeDto: CreateWorkflowStepEdgeDto) {
        const {data, error} = await this.supabase.getClient().from('workflow_step_edges').insert({
            workflow_id: createEdgeDto.workflow_id,
            from_step_id: createEdgeDto.from_step_id,
            to_step_id: createEdgeDto.to_step_id,
            condition: createEdgeDto.condition,
        });
        if (error) throw new Error(error.message);
        return { data };
    }

    async getWorkflowSteps(workflowId: string) {
        const {data, error} = await this.supabase.getClient().from('workflow_steps').select('*').eq('workflow_id', workflowId).order('step_order');
        if (error) throw new Error(error.message);
        return { data };
    }

    async getWorkflowStepEdges(workflowId: string) {
        const {data, error} = await this.supabase.getClient().from('workflow_step_edges').select('*').eq('workflow_id', workflowId);
        if (error) throw new Error(error.message);
        return { data };
    }
}