import { IsIn, IsString } from "class-validator"
export class GetUserDto {
  @IsIn(['line', 'facebook', 'google'])
  third_party: 'line' | 'facebook' | 'google'
  @IsString()
  token: string
}
