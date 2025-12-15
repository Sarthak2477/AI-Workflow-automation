
enum WorkflowStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export class CreateWorkflowDto {
  workspaceId: string;
  name: string;
  status?: WorkflowStatus = WorkflowStatus.ACTIVE;
  triggerType: string;
  triggerConfig?: Record<string, any>;
}
