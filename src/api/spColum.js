import request from '@/utils/request'
import { API_ROUTER_CONFIG } from './config'


export default{
  getItem (cb) {
    request.get(API_ROUTER_CONFIG.sp_colum).then(res=>{
      cb(res.data.articles)
    })
  }
}
