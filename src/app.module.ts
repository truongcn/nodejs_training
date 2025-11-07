import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'FCA-00055',            // 👈 KHÔNG dùng dấu "\\" ở đây
      port: 1433,                   // 👈 Port mặc định của SQL Server
      username: 'truongnv',
      password: '123456aaA@',
      database: 'StudentDB',
      options: {
        encrypt: false,             // 👈 Đặt false để tránh lỗi SSL
        trustServerCertificate: true,
        instanceName: 'SQLEXPRESS', // 👈 Thêm dòng này để chỉ định instance
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
