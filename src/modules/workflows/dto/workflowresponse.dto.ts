
enum WorkflowStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}
export class WorkflowResponseDto {
  id: string;
  workspaceId: string;
  name: string;
  status: WorkflowStatus;
  triggerType: string;
  triggerConfig: Record<string, any> | null;
  createdAt: string;
  updatedAt: string;
}
