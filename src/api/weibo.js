import request from '@/utils/request'
export default{
  getHomeTimeline(param){
    return request({param})
  },
  getWbComments(param){
    return request({param})
  },
}
