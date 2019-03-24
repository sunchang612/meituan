export default {
  dbs: 'mongodb://127.0.0.1:27017/nuxt-learn', // 连接 mongodb
  redis: { // 连接 redis 数据库
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1029841435@qq.com'
    },
    get pass() {
      return 'xxxxxxx'  // 邮箱的授权码
    }
  },
  get code() {  // 验证码
    retrun ()=>{
      return  Math.random().toString(16).slice(2,6).toUpperCase()
    }
  },

  get expire() {
    return ()=>{
      return new Date().getTime() + 60*60
    }
  }
}