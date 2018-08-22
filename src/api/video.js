import request from '@/utils/request'
import rule from './public'
import { API_ROUTER_CONFIG } from './config'
var formatKey = {
  bangumi:"动画",
  movie:"电影",
  life:"生活",
  game:"游戏",
  technology:"科技",
  teleplay:"电视剧"
}
const formatData = (res)=> {
  let data = {};
  let beforeData = res;
  for (let key in beforeData) {
    var translatedKey = formatKey[key];
    data[translatedKey] = [];
    for (let index in beforeData[key]) {
      data[translatedKey].push(beforeData[key][index]);
      for(let k in beforeData[key][index]){
        if(k=='pic'){
          data[translatedKey][index][k] = rule.replaceUrl(beforeData[key][index][k]);
        }
      }
    }
  }
  return data;
}
export default{
  getVideo(cb){
    request.get(API_ROUTER_CONFIG.video).then(res=>{
      let data = formatData(res.data);
      cb(data)
    })
  }
}
