import axios from 'axios';
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from './config'
import fakeData from '@/assets/json/roast.json'
import fakeUserData from '@/assets/json/userInfo.json'
import store from '../store'

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
})

// request拦截器
service.interceptors.request.use(config => {
  const token = store.getters.token.access_token
  if (token) {
    console.log(config.params)
    Object.assign(config.params, {access_token : token})
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

export const getUserInfo = (userId, okCallback, errorCallback) => {
  if(DEBUG){
    okCallback(fakeUserData);
  }else{
    var config = {
        method: 'get',
        url: API_ROUTER_CONFIG.userinfo,
        baseURL: HOST_CONCIG.host,
        params: {uid: userId},
        headers: {
            'Content-Type': 'application/json'
        }
    }

    service(config)
        .then(function (response) {
          console.log(response)
            okCallback(response.data)
        })
        .catch(function (error) {
            errorCallback(error)
        })
  }

}

export const getTimeLine = (page, okCallback, errorCallback) => {
  if(DEBUG){
    okCallback(fakeData)
  }else{
    var request_data = {
        count: 30,
        ...page
    }

    var config = {
        method: 'get',
        url: API_ROUTER_CONFIG.home_timeline,
        baseURL: HOST_CONCIG.host,
        params: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return service(config)
  }
}


export const getWbComments = (page, id, okCallback, errorCallback) => {
    if(DEBUG){
      okCallback(fakeData)
    }else{
    var request_data = {
        ...page,...id,
        count:10,
    }

    var config = {
        method: 'get',
        url: API_ROUTER_CONFIG.comments,
        baseURL: HOST_CONCIG.host,
        params: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return service(config)

   }
}
