<template>
  <div>
    <div class="container mx-auto pt-8">
      <h1 class="title">Choose yours seats</h1>
      <div class="grid grid-cols-3 mt-5 mb-8 mx-12">
        <div class="caja mx-auto">
          <div class="seat"></div>
          <div class="texto">N/A</div>
        </div>
        <div class="caja mx-auto">
          <div class="seat dos"></div>
          <div class="texto">Selected</div>
        </div>
        <div class="caja mx-auto">
          <div class="seat tres"></div>
          <div class="texto">Occupied</div>
        </div>
      </div>
      <div class="pantalla mx-auto drop-shadow-[0_10px_10px_rgba(255,255,255,255)]"></div>
      <div class="grid grid-cols-6 mt-8">
        <div class="grid grid-cols-2 mx-4 col-start-2 col-span-1">
          <div class="asiento" @click="agregarAsiento(1)"></div>
          <div class="asiento" @click="agregarAsiento(2)"></div>
          <div class="asiento" @click="agregarAsiento(3)"></div>
          <div class="asiento" @click="agregarAsiento(4)"></div>
          <div class="asiento" @click="agregarAsiento(5)"></div>
          <div class="asiento" @click="agregarAsiento(6)"></div>
          <div class="asiento" @click="agregarAsiento(7)"></div>
          <div class="asiento" @click="agregarAsiento(8)"></div>
          <div class="asiento" @click="agregarAsiento(9)"></div>
          <div class="asiento" @click="agregarAsiento(10)"></div>
          <div class="asiento" @click="agregarAsiento(11)"></div>
          <div class="asiento" @click="agregarAsiento(12)"></div>
        </div>
        <div class="grid grid-cols-4 col-span-2 mx-5 px-3">
          <div class="asiento" @click="agregarAsiento(13)"></div>
          <div class="asiento" @click="agregarAsiento(14)"></div>
          <div class="asiento" @click="agregarAsiento(15)"></div>
          <div class="asiento" @click="agregarAsiento(16)"></div>
          <div class="asiento" @click="agregarAsiento(17)"></div>
          <div class="asiento" @click="agregarAsiento(18)"></div>
          <div class="asiento" @click="agregarAsiento(19)"></div>
          <div class="asiento" @click="agregarAsiento(20)"></div>
          <div class="asiento" @click="agregarAsiento(21)"></div>
          <div class="asiento" @click="agregarAsiento(22)"></div>
          <div class="asiento" @click="agregarAsiento(23)"></div>
          <div class="asiento" @click="agregarAsiento(24)"></div>
          <div class="asiento" @click="agregarAsiento(25)"></div>
          <div class="asiento" @click="agregarAsiento(26)"></div>
          <div class="asiento" @click="agregarAsiento(27)"></div>
          <div class="asiento" @click="agregarAsiento(28)"></div>
          <div class="asiento" @click="agregarAsiento(29)"></div>
          <div class="asiento" @click="agregarAsiento(30)"></div>
          <div class="asiento" @click="agregarAsiento(31)"></div>
          <div class="asiento" @click="agregarAsiento(32)"></div>
          <div class="asiento" @click="agregarAsiento(33)"></div>
          <div class="asiento" @click="agregarAsiento(34)"></div>
          <div class="asiento" @click="agregarAsiento(35)"></div>
          <div class="asiento" @click="agregarAsiento(36)"></div>
        </div>
        <div class="grid grid-cols-2 mx-4">
          <div class="asiento" @click="agregarAsiento(37)"></div>
          <div class="asiento" @click="agregarAsiento(38)"></div>
          <div class="asiento" @click="agregarAsiento(39)"></div>
          <div class="asiento" @click="agregarAsiento(40)"></div>
          <div class="asiento" @click="agregarAsiento(41)"></div>
          <div class="asiento" @click="agregarAsiento(42)"></div>
          <div class="asiento" @click="agregarAsiento(43)"></div>
          <div class="asiento" @click="agregarAsiento(44)"></div>
          <div class="asiento" @click="agregarAsiento(45)"></div>
          <div class="asiento" @click="agregarAsiento(46)"></div>
          <div class="asiento" @click="agregarAsiento(47)"></div>
          <div class="asiento" @click="agregarAsiento(48)"></div>
        </div>
      </div>
    </div>
    <div class="text-white text-center" v-if="contador > 0">You have selected {{ store.state.contador }} seats for a
      price of ${{ store.state.contador * movie.pelicula[0].precio }}</div>
    <button class="btn my-8" @click="buy">Buy tickets</button>
    <Modal v-if="show"></Modal>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Modal from './Modal.vue';

const store = useStore();

store.dispatch('getPelis');

let peliculas = computed(() => store.state.peliculas);
let movie = computed(() => store.state.pelicula);
let contador = computed(() => store.state.contador);
let show = computed(() => store.state.showModal);

const agregarAsiento = (id) => {
  let selected = document.querySelectorAll(".asiento")[id - 1];
  if (selected.style.background != "white") {
    if (selected.style.background != "rgb(0, 195, 255)") {
      selected.style.background = "rgb(0, 195, 255)";
      store.commit('compraButacas', id);
      sumatoria();
    }
    else {
      selected.style.background = "gray";
      store.commit('borrarButacas', id);
      resta();
    }
  }
}

const sumatoria = () => {
  store.commit('sumaContador');
}
const resta = () => {
  store.commit('restaContador');
}
const buy = () => {
  if (store.state.contador > 0) {
    store.commit('modal');
    for (let i = 0; i < store.state.butacas.length; i++) {
      document.querySelectorAll(".asiento")[store.state.butacas[i] - 1].style.background = "white";
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  color: white;
  font-size: xx-large;
}

.container {
  width: 700px;
  height: 600px;
  background: rgb(1, 1, 57);
}

.pantalla {
  height: 0px;
  width: 400px;
  border-right: 7px solid rgb(122, 122, 161);
  border-left: 7px solid rgb(122, 122, 161);
  border-top: 100px solid white;
  background: white;
  margin-bottom: 50px;
}

.asiento {
  background: gray;
  width: 40px;
  height: 30px;
  border-radius: 30px 30px 0px 0px;
  margin: 5px;
  cursor: pointer;
}

.caja {
  display: flex;
  line-height: 50px;
}

.seat {
  background: gray;
  width: 40px;
  height: 30px;
  border-radius: 30px 30px 0px 0px;
}

.dos {
  background: rgb(0, 195, 255);
}

.tres {
  background: white;
}

.texto {
  color: gray;
  margin-left: 10px;
}

.btn {
  color: white;
  font-size: large;
  background: rgb(155, 52, 52);
  border-radius: 3px;
  padding: 7px 20px 10px 20px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
