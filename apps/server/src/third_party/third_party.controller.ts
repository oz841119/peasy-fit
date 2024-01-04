import { Body, Controller, Post } from '@nestjs/common';
import { GetUserDto } from './dtos/third_party.dto';
import { ThirdPartyService } from './third_party.service';
import { UserService } from '../user/user.service';

@Controller('third_party')
export class ThirdPartyController {
  constructor(
    private readonly thirdPartyService: ThirdPartyService,
    private readonly userService: UserService
  ) { }
  @Post('get_user')
  async getUser(@Body() getUserDto: GetUserDto) {
    const lineUser = await this.thirdPartyService.getLineIdByLiffAccessToken(getUserDto.token)
    const lineUserId = lineUser.data.userId
    let user = await this.userService.findUserWithThirdParty({ third_party: 'line', third_party_user_id: lineUserId })
    if (user === null) {
      user = await this.userService.createUserByThirdParty({ third_party: 'line', third_party_user_id: lineUserId })
    }
    return user
  }
}
