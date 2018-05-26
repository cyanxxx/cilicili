import axios from 'axios'
import rule from './public'
var formatKey = {
  bangumi:"动画",
  "movie":"电影",
  life:"生活",
  game:"游戏",
  technology:"科技",
  teleplay:"电视剧"
}

export default{
  getVideo(cb){
    axios.get('https://www.easy-mock.com/mock/5ae9e5cdbd50881f100270eb/s/video').then(res=>{
      //console.log(res);
      let data = {};
      let beforeData = res.data;
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
      cb(data)
    })
  }
}
