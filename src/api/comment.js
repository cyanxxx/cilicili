import jsonp from 'jsonp'
import { DEBUG } from './config'
import fakeData from '../../static/comment.json'
import fakeData2 from '../../static/comment2.json'

let config = 'http://bbs.005.tv/source/plugin/gact/gact.php?actions=ReplyPostsList&limit=10&tid=569583'

function getURI ( config , param ){
  for (var key in param) {
     var link = '&' + key + "=" + param[key];
     config += link;
  }
  return config;
}

export default{
    getComments (param,cb) {
    if(DEBUG){
    var arr = [fakeData,fakeData2];
    console.log(param.page)
    cb(arr[param.page-1]);
      }else{
        let url = getURI(config,param);
        jsonp(url,function(err,data){
          cb(data);
        })
      }

    }
}
