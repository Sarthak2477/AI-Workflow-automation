export enum StepType {
    // match your Postgres enum values exactly
    TRIGGER = 'TRIGGER',
    ACTION = 'ACTION',
    CONDITION = 'CONDITION',
}

export class CreateWorkflowStepDto {
    workflow_id: string;

    step_order: number;

    type: StepType;

    integration_id?: string;

    connection_id?: string;

    action?: string;

    config?: Record<string, any>;
}
