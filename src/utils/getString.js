const GET_DETAILS = /([\u4e00-\u9fa5]{2})：\s(<a.*>)(.*)(<\/a>)/;
const GET_URL = /[a-zA-z]+:\/\/[^\s]*/g;
const GET_TEN_THOUSAND = /(\d+)(\d{4}$)/;

export const getUrlKey = (key) => {
    return decodeURIComponent((new RegExp('[?|&]' + key + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

export const formatDetails = (val) => {
  var formatVal = val.replace(GET_DETAILS,function(m,s1,s2,s3,s4){
	return s2+s1+s4
})
  return formatVal;
}

export const formatNumber = (val) => {
  console.log()
  var formatVal = (val + '').replace(GET_TEN_THOUSAND,'$1'+'万')
  return formatVal;
}
export const formatUrl = (val) => {
  var formatVal = val.replace(GET_URL, function(match){
    return `<a href="${match}" >${match}</a>`
  })
  return formatVal;
}
