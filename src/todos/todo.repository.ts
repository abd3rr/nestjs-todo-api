import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todos.model";
import { Repository } from "typeorm";

@Injectable()
export class TodoRepository {

    constructor (
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ) { }


}
