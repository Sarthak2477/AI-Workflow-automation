import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SupabaseService } from '../../database/supabase.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabase: SupabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { data, error } = await this.supabase.getClient().auth.signUp({
      email: registerDto.email,
      password: registerDto.password,
      options: {
        data: {
          name: registerDto.name,
        },
      },
    });

    if (error) throw new Error(error.message);
    
    const payload = { email: data.user.email, sub: data.user.id };
    const access_token = this.jwtService.sign(payload);
    
    return { user: data.user, access_token };
  }

  async login(loginDto: LoginDto) {
    const { data, error } = await this.supabase.getClient().auth.signInWithPassword({
      email: loginDto.email,
      password: loginDto.password,
    });

    if (error) throw new Error(error.message);
    
    const payload = { email: data.user.email, sub: data.user.id };
    const access_token = this.jwtService.sign(payload);
    
    return { user: data.user, access_token };
  }
}