import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { WorkflowsModule } from './modules/workflows/workflows.module';
import { TriggersModule } from './modules/triggers/triggers.module';
import { OrchestratorModule } from './modules/orchestrator/orchestrator.module';
import { ExecutionsModule } from './modules/executions/executions.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { LogsModule } from './modules/logs/logs.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { WorkspacesModule } from './modules/workspaces/workspaces.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    WorkflowsModule,
    TriggersModule,
    OrchestratorModule,
    ExecutionsModule,
    TasksModule,
    LogsModule,
    IntegrationsModule,
    WorkspacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
