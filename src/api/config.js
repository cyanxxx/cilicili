
const key_config = {
    app_key: '689327428',
    app_secret: 'eff802cf72b70c12e8fee2a396e2edc3',
    redirect_uri: 'http://127.0.0.1:8080/login'
}

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
    comments: '/2/comments/show.json',
    live:'/live',
    sp_colum:'/spcolum',
    video:'/video'
}

export const HOST_CONCIG = host_config
export const KEY_CONFIG = key_config
export const API_ROUTER_CONFIG = api_router_config
export const DEBUG = false;
