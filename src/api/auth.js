import axios from 'axios';

const key_config = {
    app_key: '689327428',
    app_secret: 'eff802cf72b70c12e8fee2a396e2edc3',
    redirect_uri: 'http://127.0.0.1:8080/login'
}

// const key_config = {
//     app_key: '1037703853',
//     app_secret: '3aff8f495098c4ab0455ef676149d159',
//     redirect_uri: 'https://mighty-forest-61618.herokuapp.com/login'
// }

const host_config = {
    local: 'http://127.0.0.1:8080/',
    //代理服务器
    host: 'http://127.0.0.1:3000/',
    oauth: 'https://open.weibo.cn/oauth2/authorize',
}

const api_router_config = {
    //验证的host地址
    oauth_post: '/oauth2/access_token',
    userinfo: '/users/show.json',
    home_timeline: '/2/statuses/home_timeline.json',
    public_timeline: '/statuses/public_timeline.json',
}

export const oauthPost = (code, okCallback, errorCallback) => {
    var oauthData = {
        client_id: key_config.app_key,
        client_secret: key_config.app_secret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: key_config.redirect_uri
    }

    var config = {
        method: 'post',
        // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
        // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
        url: api_router_config.oauth_post,
        baseURL: host_config.host,
        data: oauthData,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //发送请求
    axios(config)
        .then(function (response) {
            okCallback(response)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}

export const HOST_CONCIG = host_config
export const KEY_CONFIG = key_config
export const API_ROUTER_CONFIG = api_router_config
