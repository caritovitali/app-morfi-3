<template lang="html">
  <div class="relative m-3 flex flex-wrap mx-auto">
    <div class="relative max-w-sm min-w-[340px] bg-white  shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
      <div class="overflow-x-hidden rounded-2xl relative">
        <router-link 
            :to="{ 
              name: 'producto', 
              params: { 
                id: producto.id,
                producto 
              } 
            }" 
           >
        <img class="h-40 rounded-2xl w-full object-cover" :src="producto.imagen"></router-link>
         
      </div>
      <div class="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p class="text-lg font-semibold text-gray-900 mb-0">{{ producto.nombre}}</p>
          <p class="text-md text-gray-800 mt-0 font-bold">${{ producto.precio}}</p>
        </div>
        <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
    </div>

</div>

</template>

<script lang="js">
  export default  {
    name: 'producto-d',
    props: {
         producto: {
            type: Object,
            required: true
        },
        },
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {
 
    },
    computed: {
    }
}
</script>

<style scoped >

</style>