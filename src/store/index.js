import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import apiServices from '@/services/api.services'


Vue.use(Vuex)

const store = new Vuex.Store({

  strict: true,

  state: {
    productos: [],

  },
  getters: {
    productos: state => state.productos,

  },
  mutations: {
    SET_PRODUCTOS: (state, data) => {
        state.productos = data;
    }
  },
  actions: {
    getProductos: ({ commit }) => {
      apiServices.getProductos()
        .then(productos => commit('SET_PRODUCTOS', productos))
        .catch(err => console.log(err))
    },
  },
  modules: { 
    user,
    cart
  }
});

export default store