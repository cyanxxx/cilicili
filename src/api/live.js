import request from '@/utils/request'
import rule from './public'
import { API_ROUTER_CONFIG } from './config'
const formatData = (data) => {
  data.forEach(val =>{
    for (var key in val) {
      if (key=='pic') {
        val[key] = rule.replaceUrl(val[key]);
      }
    }
  })
  return data;
}


export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}
export default{
  getData (cb) {
    request.get(API_ROUTER_CONFIG.live).then(res => {
      let data = formatData(res.data.recommend)
      cb(data)
    })
  }
}
