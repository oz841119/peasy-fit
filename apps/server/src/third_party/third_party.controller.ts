import { Body, Controller, Post } from '@nestjs/common';
import { GetUserDto } from './dtos/third_party.dto';

@Controller('third_party')
export class ThirdPartyController {
  @Post('get_user')
  get_user(@Body() getUserDto: GetUserDto) {
    console.log(getUserDto);
    return 1
  }
}