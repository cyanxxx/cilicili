export const saveToken = (token) => {
  const localStorage = window.localStorage
  try {
    localStorage.setItem('token', JSON.stringify(token))

  } catch (error) {

  }
}

export const getToken = () => {
  const localStorage = window.localStorage
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return token;

  } catch (error) {

    return null;
  }
}

export const saveUserInfo= (userInfo) => {
  const localStorage = window.localStorage
  try {
    //json格式字符串
    localStorage.setItem('userInfo', JSON.stringify(userInfo))

  } catch (error) {

  }
}

export const getUser = () => {
  const localStorage = window.localStorage
  try {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      return null;
    }
    return userInfo;

  } catch (error) {

    return null;
  }
}

export const saveVideoId= (videoId) => {
  const localStorage = window.localStorage
  try {
    //json格式字符串
    localStorage.setItem('videoId',videoId)
  } catch (error) {
    return null;
  }
}

export const clearVideoId = () => {
  const localStorage = window.localStorage
    if (localStorage.getItem('videoId')) {
      localStorage.removeItem('videoId');
    }
}

export const getVideoId = () => {
  const localStorage = window.localStorage;
  const videoId = localStorage.getItem('videoId');
  return   videoId;
  try {
    const videoId = localStorage.getItem('videoId');
    cosnole.log(videoId)
    if (!videoId) {
      return null;
    }
    cosnole.log(videoId)
    return videoId;

  } catch (error) {

    return null;
  }
}
