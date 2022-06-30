<template>
<div>
    <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-10">
    <Producto v-for="(producto,i) in productos"
             :key="i"
             :producto="producto"
             @ver-producto="showProducto" />

    </div>       
</div>

</template>

<script>
import Producto from '@/components/productos/Producto.vue'


export default {
  props:{

  
  },
    data(){
      return{
        producto:{}
      }
    },
  name: 'ProductosView',
  components: {
    Producto
  },methods:{
        updateCart(prod){
          console.log(prod)
          this.$emit('add-to-cart', prod)
          this.producto={}
       },
       showProducto(producto){
         this.producto=producto;
         
       },
       closeProducto(){
         this.producto={}
       }

  },
   created() {
    this.$store.dispatch('getProductos')
    },

    computed: {
      productos() {
        return this.$store.getters.productos
      }
    }
}
</script>
