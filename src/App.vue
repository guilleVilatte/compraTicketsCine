<template>
  <div class="fondo">
    <Pelicula class="py-5"></Pelicula>
    <Cine v-if="showCine"></Cine>
  </div>
</template>

<script>
import Cine from './components/Cine.vue'
import Pelicula from './components/Pelicula.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
    Cine,
    Pelicula
  },
  setup(){
    const store = useStore();
    const showCine = computed(() => store.state.mostrarCine)
    return{
      showCine
    }
  }
}
</script>

<style scoped>
.fondo{
  background: rgb(1, 1, 57);
  height: 100%;
}
</style>
