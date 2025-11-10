import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) { }

    // Đăng ký tài khoản mới
    async register(username: string, password: string) {
        const existing = await this.userRepository.findOne({ where: { username } });
        if (existing) {
            throw new Error('Username already exists');
        }

        const hashed = await bcrypt.hash(password, 10);
        const user = this.userRepository.create({ username, password: hashed, role: 'admin' });
        await this.userRepository.save(user);
        return { message: 'Register successfully' };
    }

    // Đăng nhập
    async login(username: string, password: string) {
        const user = await this.userRepository.findOne({ where: { username } });
        if (!user) throw new Error('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid password');

        const payload = { username: user.username, sub: user.id, role: user.role };
        const token = this.jwtService.sign(payload);

        return { access_token: token };
    }

    async validateUser(payload: any) {
        return await this.userRepository.findOne({ where: { id: payload.sub } });
    }
}
