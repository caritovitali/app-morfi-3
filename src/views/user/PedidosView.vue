<template>
    <div>
        <div class="">

        <h3>Tus Pedidos:</h3>
             
        </div>
        <div>
          <TablePedidos v-for="(pedido,i) in pedidos"
             :key="i"
             :pedido="pedido" />
        </div>
       
    </div>
</template>

<script>
import apiServices from '@/services/api.services';
  import { mapGetters } from 'vuex'
import TablePedidos from '@/components/user/TablePedidos.vue'
export default {
  name: 'PedidosView',
  components:{
    TablePedidos
  },
  data: () => ({
    pedidos: []
  }),

  props: {


  },

  mounted() {
    console.log(this.user)
        if (this.user) this.getPedidos();
        else this.$router.push('/')

  },
  
  methods: {
    // Si no hay un usuario admin loggeado, volver a home
    async getPedidos() {
      if (this.user) this.pedidos = await apiServices.getPedidos(this.user.id);
      else this.$router.push('/')
    },
      
   
  },
   computed: {
        ...mapGetters('user', ['user']),
        
  }
}
</script>

<style>

</style>