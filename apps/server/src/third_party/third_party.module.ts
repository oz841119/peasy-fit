import { Module } from '@nestjs/common';
import { ThirdPartyController } from './third_party.controller';

@Module({
  controllers: [ ThirdPartyController ],
})
export class ThirdParty {}
