import { TaskEntity } from "../entities/TaskEntity";
import { TaskRepository } from "../repositories/TaskRepository";

export class GetAllTask_Usecase {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async execute(): Promise<TaskEntity[]> {
        return this.taskRepository.getAllTasks();
    }
}