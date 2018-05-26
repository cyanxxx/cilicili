import axios from 'axios';
import { HOST_CONCIG, API_ROUTER_CONFIG } from './auth'

export const getUserInfo = (accesstoken, userId, okCallback, errorCallback) => {
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

export const getTimeLine = (accesstoken, page, okCallback, errorCallback) => {
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
