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

export default{
  getData (cb) {
    return request.get(API_ROUTER_CONFIG.live).then(res => {
      console.log(res)
      let data = formatData(res.data.recommend)
      cb(data)
    })
  }
}
