import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, map, type Observable } from 'rxjs';
import type { AxiosResponse } from 'axios'

interface LineUserProfile {
  userId: string,
  displayName: string,
  pictureUrl: string,
  statusMessage: string
}
@Injectable()
export class ThirdPartyService {
  constructor(private readonly httpService: HttpService) { }
  getLineIdByLiffAccessToken(lineAccessToken: string) {
    const LINE_GET_USER_PROFILE_API = 'https://api.line.me/v2/profile'
    return this.httpService.axiosRef.get<LineUserProfile>(LINE_GET_USER_PROFILE_API, {
      headers: {
        Authorization: 'Bearer ' + lineAccessToken
      }
    })
  }
}