import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'FCA-00055',
      port: 61749,           
      username: 'truongnv',
      password: '123456aaA@',
      database: 'StudentDB',
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
      autoLoadEntities: true,
      synchronize: true,
    }),

    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
