<template>
    <div class="contenedor">
        <div>
            <label for="peliculas" class="mr-4 text-white">Pick a movie:</label>
            <select name="peliculas" id="peliculas" v-model="searchMovie">
                <option value=""></option>
                <option v-for="(pelicula, i) in peliculas" :key="i" :value="i">{{ pelicula.pelicula[0].name }} - ($ {{
                pelicula.pelicula[0].precio }})</option>
            </select>
            <button class="btn ml-5" @click="choose()">choose</button>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const store = useStore();
const searchMovie = ref("");
store.dispatch('getPelis');

let peliculas = computed(() => store.state.peliculas);

const choose = () => {
    if (searchMovie) {
        store.commit('chooseMovie', searchMovie);
        store.commit('showCine');
        if (store.state.cleanButacas[0]){
            for(let i = 0; i < store.state.cleanButacas.length; i++){
                for(let j = 0; j < store.state.cleanButacas[i].length; j++)
                document.querySelectorAll(".asiento")[store.state.cleanButacas[i][j] - 1].style.background = "gray";
            }
            store.state.cleanButacas = [];
        }
    }
}
</script>

<style scoped>
.contenedor {
    background: rgb(1, 1, 57);
}

#peliculas {
    border-radius: 3px;
}

.btn {
    color: white;
    background: rgb(155, 52, 52);
    border-radius: 3px;
    padding: 2px 15px 5px 15px;
}
</style>