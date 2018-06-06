import axios from 'axios';
import { HOST_CONCIG, API_ROUTER_CONFIG, DEBUG } from './config'
import fakeData from '../../static/roast.json'
import fakeUserData from '../../static/userInfo.json'

export const getUserInfo = (accesstoken, userId, okCallback, errorCallback) => {
  if(DEBUG){
    okCallback(fakeUserData);
  }else{
    var request_data = {
        access_token: accesstoken,
        //名字和uid二选其一即可
        uid: userId,
    }
    var config = {
        method: 'get',
        url: API_ROUTER_CONFIG.userinfo,
        baseURL: HOST_CONCIG.host,
        params: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios(config)
        .then(function (response) {
            okCallback(response.data)
        })
        .catch(function (error) {
            errorCallback(error)
        })
  }

}

export const getTimeLine = (accesstoken, page, okCallback, errorCallback) => {
  if(DEBUG){
    okCallback(fakeData)
  }else{
    var request_data = {
        access_token: accesstoken,
        count: 30,
        page: page
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
    axios(config)
        .then(function (response) {
            okCallback(response.data)
        })
        .catch(function (error) {
            errorCallback(error)
        })
  }
}


export const getWbComment = (accesstoken, page, id, okCallback, errorCallback) => {
  // if(DEBUG){
  //   //okCallback(fakeData)
  // }else{
    var request_data = {
        //access_token:'2.00LGl4DCvKGOIB015ec8b6440rYRs5',
        page:page,
        access_token: accesstoken,
        count:10,
        id:id
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
    axios(config)
        .then(function (response) {
            okCallback(response.data)
        })
        .catch(function (error) {
            errorCallback(error)
        })
  // }
}
