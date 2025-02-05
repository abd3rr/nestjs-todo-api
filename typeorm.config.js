import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ['dist/**/*.model.js'], // change model to entity depending on your project
    migrations: ['dist/migrations/*.js'], // Path to compiled migration files
    synchronize: false, // Disable synchronize in production
    logging: true, // Enable logging for debugging
});
