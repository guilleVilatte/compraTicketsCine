<template>
    <div>
        <div class="modal-overlay">
            <div class="row modal text-white">
                <div @click="close()" class="icon close"></div>
                <h2 class="subtitle">Enjoy the Movie {{movie.pelicula[0].name}}</h2>
                <div class="mb-5">Ticket price: ${{movie.pelicula[0].precio}}</div>
                <div class="" v-for="(butaca, i) in butacas" :key="i">Seat Number: {{ butaca }}</div>
                <div class="my-5">Total tickets: {{contador}}</div>
                <div class="mb-5">Total price: ${{contador * movie.pelicula[0].precio}}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

store.dispatch('getPelis')
let movie = computed(() => store.state.pelicula);
let contador = computed(() => store.state.contador);
let butacas = computed(() => store.state.butacas)

const close = () => {
    store.commit('closeModal');
    store.state.contador = 0;
    store.state.cleanButacas.push(store.state.butacas);
    console.log(store.state.cleanButacas)
    store.state.butacas = [];
}
</script>

<style>
.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    height: 120vh;
}

.modal {
    display: block;
    border-radius: 10px;
    width: 45%;
    text-align: center;
    position: fixed;
    top: 10%;
    left: 30%;
    background: rgb(1, 1, 57);
}
.subtitle{
  font-size: large;
  margin-top: 40px;
  margin-bottom: 20px;
}
.icon {
  margin-left: 15px;
  background-attachment: cover;
  background-position: center center;
  background-size: cover;
  height: 26px;
  width: 30px;
}
.close {
    background-image: url('../../public/rectangle-xmark-solid.svg');
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
}
.close:hover{
    background-image: url('../../public/rectangle-xmark-blanco.svg');
}

@media only screen and (max-width: 1050px) {
    .modal {
        width: 60%;
        left: 20%;
    }
}

@media only screen and (max-width: 800px) {
    .modal {
        width: 70%;
        left: 15%;
    }
}

@media only screen and (max-width: 600px) {
    .modal {
        width: 100%;
        left: 0;
    }
}
</style>