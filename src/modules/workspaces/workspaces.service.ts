import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { SupabaseService } from '../../database/supabase.service';

@Injectable()
export class WorkspacesService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createWorkspaceDto: CreateWorkspaceDto) {
    const { data, error } = await this.supabase.getClient()
      .from('workspaces')
      .insert({
        owner_id: createWorkspaceDto.owner_id,
        name: createWorkspaceDto.name,
      });
    
    if (error) throw new Error(error.message);
    return { data };
  }

  async findAll() {
    const { data, error } = await this.supabase.getClient()
      .from('workspaces')
      .select('*');
    
    if (error) throw new Error(error.message);
    return { data };
  }

  async findOne(id: string) {
    const { data, error } = await this.supabase.getClient()
      .from('workspaces')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw new Error(error.message);
    return { data };
  }
}