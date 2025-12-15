import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { databaseConfig } from '../config/database.config';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    if(databaseConfig.supabaseUrl && databaseConfig.supabaseAnonKey){
      this.supabase = createClient(
        databaseConfig.supabaseUrl,
        databaseConfig.supabaseAnonKey,
      );
    }
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}