import axios from 'axios'
import rule from './public'
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from './config'
import fakeData from '../../static/live.json'
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
    if(DEBUG){
      let data = formatData(fakeData.recommend)
      cb(data)
    }else{
      axios.get(HOST_CONCIG.mock+API_ROUTER_CONFIG.live).then(res => {
        let data = formatData(res.data.recommend)
        cb(data)
      })
    }

  }
}
