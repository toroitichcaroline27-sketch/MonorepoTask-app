import { TaskStatus } from '../schemas/task.schema';
export declare class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: TaskStatus;
}
