import { Controller, Post, Body, UseGuards, Get, ForbiddenException, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() body: { username: string; password: string }) {
        return this.authService.register(body.username, body.password);
    }

    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
        return this.authService.login(body.username, body.password);
    }
}

@Controller('admin')
export class HelloAdmin {
@UseGuards(AuthGuard('jwt'))
    @Get()
    getAdmin(@Req() req: any) {
        const user = req.user as User;
        if (!user || user.role !== 'admin') {
            throw new ForbiddenException('Bạn không có quyền truy cập');
        }
        return { message: 'Xin chào admin' };
    }
}