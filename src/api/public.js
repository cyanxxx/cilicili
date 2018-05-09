export default {
  replaceUrl(url){
    return url.replace(/https?:\/\//g, 'https://images.weserv.nl/?url=')
  }
}
