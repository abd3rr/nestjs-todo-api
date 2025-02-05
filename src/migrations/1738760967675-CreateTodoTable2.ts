import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTodoTable21738760967675 implements MigrationInterface {
    name = 'CreateTodoTable21738760967675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "test" character varying(100) NOT NULL, "testDes" character varying(500), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
