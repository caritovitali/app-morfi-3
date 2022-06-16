<template>
  <div id="app">
        <NavBar 

             />
      <div class="py-12 md:px-20 sm:px-14 px-6">
        <router-view

         />
            <CarritoModal  />
      </div>
        
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import CarritoModal from './components/carrito/CarritoModal.vue'
export default {
  name: 'App',
  components: {
    NavBar, CarritoModal
  },data(){
    return{
    
    }
  },
 mounted() {

  },
  methods:{
/*       logOut(){
            this.carrito=[];
            localStorage.removeItem('usuario');
            this.usuario=null
            this.$router.push('/')
        
      }, */
/*      getCarrito() {
      this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    },getUsuario() {
      this.usuario = JSON.parse(localStorage.getItem('usuario')) || null;
    }, */ 
/*     showCarritoModal(data){
      this.showCarrito=data
    },
    closeCarritoModal(data){
      this.showCarrito=data
    },
    async finalizarCompra(){
        var items=[this.carrito]
             await apiServices.guardarCompra(this.usuario.id,items);
             this.vaciarCarrito()
    }, 
    updateCart(prod) {
        const productInCart = this.carrito.find(producto => producto.id === prod.id)             
        if (productInCart) {
          productInCart.cantidad++;
          productInCart.total = productInCart.cantidad * productInCart.precio;
              
        } else {
          const findProduct = this.productos.find(producto => producto.id === prod.id);
          const newProduct = { ...findProduct };
          this.carrito.push({
            ...newProduct,
            cantidad: prod.cantidad, 
            total: newProduct.precio
          })
        }
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
    },
    vaciarCarrito(){
         this.carrito=[];
         localStorage.removeItem('carrito');
         this.showCarrito=false;
    },
     addProducto(producto){
      this.productos.push(producto)
    }, */

     
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
