import { TaskStatus } from '../schemas/task.schema';
export declare class CreateTaskDto {
    title: string;
    description?: string;
    status?: TaskStatus;
}
