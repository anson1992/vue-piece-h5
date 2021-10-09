import { RequestTypeEnum } from '../utils/axios-http/http-enum'
import request from '../utils/axios-http/index'

export const getApi = () => {
  return request.request({
    method: RequestTypeEnum.GET,
    url: 'coudMusicApi/countries/code/list'
  })
}

export const sendCodeApi = () => {
  return request.request({
    data: {
      phone: '17714331167'
    },
    method: RequestTypeEnum.POST,
    url: 'coudMusicApi/login/qr/key'
  })
}
export const sendDelUserApi = () => {
  return request.request({
    url: 'coudMusicApi/playlist/delete?id=2947311456',
    method: RequestTypeEnum.DELETE
  })
}
export const sendLogoutApi = () => {
  return request.request({
    url: 'coudMusicApi/logout'
  })
}
