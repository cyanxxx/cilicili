import axios from 'axios'
import rule from './public'
export default{
  getVideo(cb){
    axios.get('https://www.easy-mock.com/mock/5ae9e5cdbd50881f100270eb/s/video').then(res=>{
      //console.log(res);
      let data = {};
      let beforeData = res.data;
      for (let key in beforeData) {
        data[key] = [];
        for (let index in beforeData[key]) {
          data[key].push(beforeData[key][index]);
          for(let k in beforeData[key][index]){
            if(k=='pic'){
              data[key][index][k] = rule.replaceUrl(beforeData[key][index][k]);
            }
          }

        }
      }
      cb(data)
    })
  }
}
