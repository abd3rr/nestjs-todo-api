import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todos/todos.module';



@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule, TodoModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>('POSTGRES_HOST'), // NESTJS HANDLE AUTOMATICALLY THE ENVIRONMENT VARIABLES CONVERSION
      port: configService.get('POSTGRES_PORT'), // omitting the type in this case, NESTJS CAST THE VALUE TO THE CORRECT TYPE, IN THIS CASE NUMBER
      username: configService.get('POSTGRES_USER'),
      password: configService.get('POSTGRES_PASSWORD'),
      database: configService.get('POSTGRES_DB'),
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
      isGlobal: true,
    })
   
    }),
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
