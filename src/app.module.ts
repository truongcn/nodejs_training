import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
      
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'FCA-00055',
      port: 61749,            // this is ICP Dynamic Ports 61749, 1433 is default port (but can't setup)
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
