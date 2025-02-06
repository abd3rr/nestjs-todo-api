import { Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from "./todos.model";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { InternalServerErrorException } from '@nestjs/common';
import { TodoRepository } from "./todo.repository";
import { Not } from "typeorm";



@Injectable()
export class TodoService {
    constructor (private readonly todoRepository: TodoRepository) { }

    async getTodoById(id: string): Promise<Todo> {
        return await this.todoRepository.getTodoById(id);
    }
    async getTodos(): Promise<Todo[]> {
        return await this.todoRepository.getTodos();
    }

    async save(createTodoDTO: CreateTodoDto): Promise<Todo> {
        try {
            const todo = this.todoRepository.createInstance(createTodoDTO);
            return await this.todoRepository.save(todo);
        } catch (error) {
            throw new InternalServerErrorException('Error creating to do: ' + error.message);
        }

    }

    async update(id: string, createTodoDTO: CreateTodoDto): Promise<Todo> {

        const todo = await this.getTodoById(id);
        if (this.isDeleted(todo)) throw new NotFoundException(`Todo with id ${id} not found`);

        try {

            Object.assign(todo, createTodoDTO);
            return await this.todoRepository.save(todo);

        } catch (error) {

            throw new InternalServerErrorException('Error updating to do: ' + error.message);
        }
    }

    async softDelete(id: string): Promise<void> {
        return await this.todoRepository.softDelete(id);
    }

    isDeleted(todo: Todo): boolean {
        return todo.deletedAt != null ? true : false;
    }



}