export default {

    namespaced: true,
  
    state: {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      showCart:false
    },
  
    getters: {
      cart: state => state.cart,
      cartQty(state){      
          return state.cart.reduce((acc, producto) => acc + producto.cantidad, 0)
      },
      showCart(state){      
        return state.showCart
      }
      
    },
    mutations:{
        ADD_TO_CART: (state, { producto, counter }) => {
            const inCart = state.cart.find(prod => prod.id == producto.id)
            if (inCart) {
              inCart.cantidad = counter;
              inCart.total = inCart.precio * counter;
            } else {
              state.cart.push({
                ...producto,
                cantidad: counter,
                total: producto.precio * counter
              })
            }
          },
          EMPTY_CART: (state) => {
            state.cart = [];
            localStorage.removeItem('cart');
          },
          SET_CART: (state, cart) => {
            if (cart) {
              state.cart = cart;
              localStorage.setItem('cart', JSON.stringify(cart));
            } else {
              state.cart = null;
              localStorage.removeItem('cart');
            }
          },
        
    },actions:{
        setCart: ({ commit }, cart) => {
            commit('SET_CART', cart)
          }
    }
  
    // etc...
  }