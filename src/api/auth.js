import axios from 'axios';
import { HOST_CONCIG,KEY_CONFIG, API_ROUTER_CONFIG, DEBUG } from './config'


export const oauthPost = (code, okCallback, errorCallback) => {
  if(DEBUG){
    okCallback(1)
    return;
  }else{
    var oauthData = {
        client_id:KEY_CONFIG.app_key,
        client_secret:KEY_CONFIG.app_secret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri:KEY_CONFIG.redirect_uri
    }

    var config = {
        method: 'post',
        // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
        // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
        url: API_ROUTER_CONFIG.oauth_post,
        baseURL: HOST_CONCIG.host,
        data: oauthData,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //发送请求
    axios(config)
        .then(function (response) {
            okCallback(response.data)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
  }

}
