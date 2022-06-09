// store/modules/user.js
export default {
    namespaced: true,
    state: {
      user: JSON.parse(localStorage.getItem('user')) || null
    },
  
    getters: {
      user: state => state.user,
    },
    mutations: {
        SET_USER: (state, user) => {
          if (user) {
            delete user.password;
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
          } else {
            state.user = null;
            localStorage.removeItem('user');
          }
        }
      },
      
      actions: {
        setUser: ({ commit }, user) => {
          commit('SET_USER', user)
        }
      }
  

  }