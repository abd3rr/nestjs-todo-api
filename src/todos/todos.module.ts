import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todos.model";
import { TodoService } from "./todos.service";
import { TodoController } from "./todos.controller";
import { TodoRepository } from "./todo.repository";




@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    // exports: [TypeOrmModule], // To use it outside of this module
    providers: [TodoService, TodoRepository],
    controllers: [TodoController]
})
export class TodoModule { }