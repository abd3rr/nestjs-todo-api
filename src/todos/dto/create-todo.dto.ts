import { IsNotEmpty, IsOptional, IsString, MaxLength, IsEnum } from 'class-validator';


export class CreateTodoDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    title: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    description: string;

    @IsOptional()
    @IsEnum(['IN_PROGRESS', 'COMPLETED'])
    status?: 'IN_PROGRESS' | 'COMPLETED';

}