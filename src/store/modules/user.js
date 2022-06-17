// store/modules/user.js
import apiServices from '@/services/api.services'
export default {
    namespaced: true,
    state: {
      users:[],
      user: JSON.parse(localStorage.getItem('user')) || null
    },
  
    getters: {
      user: state => state.user,
      getUsers(state) {
        return state.users;
      },    
      getUserLogged(state) {
        return state.user;
      },
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
          },
        SET_USER: (state, user) => {
          if (user) {
            delete user.password;
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
          } else {
            state.user = null;
            localStorage.removeItem('user');
        
          }
        },
    
      },
      actions: {
        toSetUsers: ({ commit }) => {
            apiServices.getUsers()
              .then(users => commit('setUsers', users))
              .catch(err => console.log(err))
          },
        toSetUserStorage: ({ commit }, user) => {
          commit('SET_USER', user)
        }
      }
  

  }