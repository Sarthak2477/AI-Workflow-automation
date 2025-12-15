export class CreateWorkflowStepEdgeDto {
  workflow_id: string;
  from_step_id: string;
  to_step_id: string;
  condition?: Record<string, any>;
}