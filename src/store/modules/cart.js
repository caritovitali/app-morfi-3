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
      },
       getCantProd: state => id => {
      const inCart = state.cart.find(prod => prod.id == id)
        if (inCart) {
          return inCart.cantidad;

        }else{
          return 1
        }
    }  
      
    },
    mutations:{
        ADD_TO_CART: (state,  producto ) => {
            const inCart = state.cart.find(prod => prod.id == producto.id)
            if (inCart) {
              inCart.cantidad = producto.cantidad;
              inCart.total = inCart.precio * producto.cantidad;
            } else {
                
              state.cart.push({
                ...producto,
                total: producto.precio * producto.cantidad
              })
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
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
          },
          setEmptyCart: ({ commit }) => {
            commit('EMPTY_CART')
          },
          toAddToCart: ({ commit }, product) => {
            commit('ADD_TO_CART', product)
          }
    }
  
  }