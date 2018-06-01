import axios from 'axios'
import rule from './public'
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from './config'
import fakeData from '../../static/videoGroup.json'
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
    if(DEBUG){
      let data = formatData(fakeData);
      cb(data)
    }else{
      axios.get(HOST_CONCIG.mock+API_ROUTER_CONFIG.video).then(res=>{
        let data = formatData(res.data);
        cb(data)
      })
    }

  }
}
