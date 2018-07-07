import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    data: null
  },
  mutations: {
        increment(state) {
      state.count++
    },
    substract(state) {
            state.count--
    },
    setData(state, data) {
      state.data = data
    }
  },
  actions: {
    // increment (context) {   context.commit('increment') }//也可以这么用，只不过麻烦一点
    increment({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    getData({commit}) {
      axios({url: "/api/v1/topic/5aae1cc8f5dfc27d7ad98909"})
        .then((res) => {
          if (res.data.success) {
            commit("setData", res.data.data)
            console.log(res.data.data)
          }
        }, (err) => {
          console.log(err);
        });
    }
  }
})

export default store
