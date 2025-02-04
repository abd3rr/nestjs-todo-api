import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Todo } from "./todos.model";



@Injectable()
export class TodoService {
    constructor (
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ) { }



}