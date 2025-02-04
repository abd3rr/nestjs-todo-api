import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Todo {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 500, nullable: true })
    description: string;

    @Column({
        type: 'enum',
        enum: ['IN_PROGRESS', 'COMPLETED'],
        default: 'IN_PROGRESS'
    })
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}