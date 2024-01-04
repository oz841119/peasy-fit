import { Module } from '@nestjs/common';
import { ThirdPartyController } from './third_party.controller';
import { HttpModule } from '@nestjs/axios';
import { ThirdPartyService } from './third_party.service';
import { userModule } from '@server/user/user.module';

@Module({
  imports: [HttpModule, userModule],
  controllers: [ThirdPartyController],
  providers: [ThirdPartyService]
})
export class ThirdParty {}
