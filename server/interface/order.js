import Router from 'koa-router';
import axios from './utils/axios'
import Order from '../dbs/models/order'
import Cart from '../dbs/models/cart'
import md5 from 'crypto-js/md5'

let router = new Router({prefix: '/order'})

router.post('/createOrder', async ctx => {
  let { id, price, count } = ctx.request.body
  const time = Date()
  const orderId = md5(Math.random() * 1000 + time).toString()

  if(!ctx.isAuthenticated()) {
    ctx.body = {
      code: '-1',
      msg: '请登录！'
    }
  } else {
    const findCart = await Cart.findOne({
      cartNo: id
    })

    const newOrder = new Order({
      id: orderId,
      count,
      total: price * count,
      user: ctx.session.passport.user,
      name: findCart.detail[0].name,
      imgs: findCart.detail[0].imgs,
      status: 0
    })

    try {
      const result = await newOrder.save()
      if (result) {
        await findCart.remove()
        ctx.body = {
          code: 0,
          id: orderId
        }
      } else {
        ctx.body = {
          code: -1
        }
      }
    } catch (error) {
      ctx.body = {
        code: -1
      }
    }
  }
})

router.post('/getOrders', async ctx => {
  if(!ctx.isAuthenticated()) {
    ctx.body = {
      code: '-1',
      msg: '请登录！'
    }
  } else {
    try {
      const result = await Order.find()
      if (result) {
        ctx.body = {
          code: 0,
          list: result
        }
      } else {
        ctx.body = {
          code: -1,
          list: []
        }
      }
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error
      }
    }
  }
})

export default router