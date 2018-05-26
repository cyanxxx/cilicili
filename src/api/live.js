import axios from 'axios'
import rule from './public'
export default{
  getData (cb) {
    axios.get('https://www.easy-mock.com/mock/5ae9e5cdbd50881f100270eb/s/live').then(res => {
      let data = res.data.recommend;
      //console.log(data);
      data.forEach(val =>{
        for (var key in val) {
          if (key=='pic') {
            val[key] = rule.replaceUrl(val[key]);
          }
        }
      })
      //console.log(data);
      cb(data)
    })
  }
}
