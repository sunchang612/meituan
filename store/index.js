import vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'

vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo
  },
  actions: {
    async nuxtServerInit({
      commit
    }, { req, app }) {
      const { status, data: { province, city }} = await app.$axios.get('/geo/getPosition')
      commit('get/setPositon', status === 200 ? { city, province }: { city: '', province: '' })
      console.log(province, city)
    }
  }
})

export default store
