import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers({
      take: 10,
      skip: 0,
    });
  }

  @Get('/:id')
  async getUser(@Param('id') id: number) {
    return this.userService.getUser({ id });
  }
}
