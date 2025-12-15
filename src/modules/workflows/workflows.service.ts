import { Injectable } from '@nestjs/common';
import { CreateWorkflowDto } from './dto/createworkflow.dto';
import { UpdateWorkflowDto } from './dto/updateworkflow.dto';
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
}