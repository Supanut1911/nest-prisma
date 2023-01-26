import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers({
      take: 10,
      skip: 0,
    });
  }

  @Get('/:id')
  async getUser(@Param('id') id: number) {
    return await this.userService.getUser({ id });
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;
    return await this.userService.createUser({
      name,
      email,
    });
  }
}
