import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todos.model";
import { IsNull, Repository } from "typeorm";
import { CreateTodoDto } from "./dto/create-todo.dto";

// repository wrapper in reality its a service
@Injectable()
export class TodoRepository {

    constructor (
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>
    ) { }

    async getTodos(): Promise<Todo[]> {
        return await this.todoRepository.find({ where: { deletedAt: IsNull() } });
    }

    async getTodoById(id: string): Promise<Todo> {
        const todo = await this.todoRepository.findOne({ where: { id } });
        if (!todo || todo.deletedAt != null) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        }
        return todo;
    }
    // create Todo without saving it
    createInstance(createTodoDTO: CreateTodoDto): Todo {
        return this.todoRepository.create(createTodoDTO);
    }

    async save(todo: Todo): Promise<Todo> {
        return await this.todoRepository.save(todo);
    }

    async softDelete(id: string): Promise<void> {
        const result = await this.todoRepository.softDelete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        }


    }
}
