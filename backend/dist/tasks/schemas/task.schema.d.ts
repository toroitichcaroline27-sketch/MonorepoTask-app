import { Document } from 'mongoose';
export type TaskDocument = Task & Document;
export declare enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}
export declare class Task {
    title: string;
    description: string;
    status: TaskStatus;
}
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any, any, any, any, Task>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Task, Document<unknown, {}, Task, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Task, Document<unknown, {}, Task, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Task, Document<unknown, {}, Task, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<TaskStatus, Task, Document<unknown, {}, Task, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Task>;
