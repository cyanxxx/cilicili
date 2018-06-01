import axios from 'axios';
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from './config'
import fakeData from '../../static/spcolum.json'

export default{
  getItem (cb) {
    if(DEBUG){
      cb(fakeData.articles)
    }else{
      axios.get(HOST_CONCIG.mock+API_ROUTER_CONFIG.sp_colum).then(res=>{
        cb(res.data.articles)
      })
    }

  }
}
