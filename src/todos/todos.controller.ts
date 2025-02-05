import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { TodoService } from "./todos.service";
import { Todo } from "./todos.model";
import { CreateTodoDto } from "./dto/create-todo.dto";


@Controller('todos')
export class TodoController {

    constructor (private readonly todoService: TodoService) { }

    @Get()
    async getTodos(): Promise<Todo[]> {
        return await this.todoService.getTodos();
    }

    @Get(':id')
    async getTodoById(@Param('id') id: string): Promise<Todo> {
        console.log("hada id" + id);
        return await this.todoService.getTodoById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createTodo(@Body() createTodoDTO: CreateTodoDto): Promise<Todo> {
        return await this.todoService.save(createTodoDTO);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async softDelete(@Param() id: string): Promise<void> {

        return await this.todoService.softDelete(id);
    }

}