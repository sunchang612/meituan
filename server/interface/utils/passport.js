import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(new LocalStrategy(async function(username, password, callback) {
  let where = {
    username
  }
  let result = await UserModel.findOne(where)
  if (result) {
    if(result.passport === password) {
      return callback(null, result)
    } else {
      return callback(null, false, '密码错误')
    }
  } else {
    return callback(null, false, '用户不存在')
  }
}))

// 序列化

passport.serializeUser((user, callback) => {
  callback(null, user)
})

// 反序列化
passport.deserializeUser((user, callback) => {
  return callback(null, user)
})

export default passport
