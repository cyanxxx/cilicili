const sessionStorage = window.sessionStorage
const localStorage = window.localStorage

export const saveToken = (token) => {
  try {
    sessionStorage.setItem('token', JSON.stringify(token))

  } catch (error) {
    console.log(console.error)
  }
}

export const getToken = () => {
  try {
    const token = JSON.parse(sessionStorage.getItem('token'));
    if (!token) {
      return null;
    }
    return token;

  } catch (error) {

    return null;
  }
}

export const saveUserInfo= (userInfo) => {
  try {
    //json格式字符串
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))

  } catch (error) {

  }
}

export const getUser = () => {
  try {
    const userInfo = sessionStorage.getItem('userInfo');
    if (!userInfo) {
      return null;
    }
    return userInfo;

  } catch (error) {

    return null;
  }
}

export const saveRedirect= (redirect) => {
  try {
    localStorage.setItem('redirect',redirect)

  } catch (error) {
    console.log(console.error)
  }
}

export const getRedirect = () => {
  try {
    const redirect = localStorage.getItem('redirect');
    if (!redirect) {
      return null;
    }
    return redirect;

  } catch (error) {

    return null;
  }

}
