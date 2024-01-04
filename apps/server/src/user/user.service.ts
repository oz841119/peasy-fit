import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }
  async findUserWithThirdParty({ third_party, third_party_user_id }: { third_party: ThirdParty, third_party_user_id: string }) {
    const thirdPartyField = {
      line: 'line_id',
      facebook: 'facebook_id',
      google: 'google_id'
    }
    const user = await this.userModel.findOne({ [thirdPartyField[third_party]]: third_party_user_id })
    return user
  }
  async createUserByThirdParty({ third_party, third_party_user_id }: { third_party: ThirdParty, third_party_user_id: string }) {
    const thirdPartyField = {
      line: 'line_id',
      facebook: 'facebook_id',
      google: 'google_id'
    }
    const createUser = new this.userModel({ [thirdPartyField[third_party]]: third_party_user_id })
    return createUser.save()
  }
}