import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../database/supabase.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly supabase: SupabaseService) {}

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
    return { user: data.user, session: data.session };
  }

  async login(loginDto: LoginDto) {
    const { data, error } = await this.supabase.getClient().auth.signInWithPassword({
      email: loginDto.email,
      password: loginDto.password,
    });

    if (error) throw new Error(error.message);
    return { user: data.user, session: data.session };
  }
}