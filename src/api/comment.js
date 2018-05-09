import jsonp from 'jsonp'
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
      let url = getURI(config,param);
      jsonp(url,function(err,data){
        cb(data);
      })
    }
}
