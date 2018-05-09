import axios from 'axios';

export default{
  getItem (cb) {
      axios.get('https://www.easy-mock.com/mock/5ae9e5cdbd50881f100270eb/s/spcolum').then(res=>{
        cb(res.data.articles)
      })
  }
}
