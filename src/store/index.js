import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    peliculas: [],
    pelicula: {},
    contador: 0,
    mostrarCine: false,
    showModal: false,
    butacas: []
  },
  getters: {
  },
  mutations: {
    pelis: (state, peliculasAction) => {
      state.peliculas = peliculasAction;
    },
    sumaContador: (state) => {
      state.contador++;
    },
    restaContador: (state) => {
      state.contador--;
    },
    chooseMovie: (state, index) => {
      state.pelicula = state.peliculas[index.value];
    },
    showCine: (state) => {
      if(state.pelicula)
        state.mostrarCine = true;
    },
    modal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
    compraButacas: (state, id) => {
      state.butacas.push(id);
    }
  },
  actions: {
    async getPelis({ commit }) {
      const movies = await axios.get('http://localhost:3000/results').then(response => response.data);
      commit('pelis', movies);
    },
    /*async postSeats(seatsAvailables, index) {
      const asientos = axios.put('http://localhost:3000/results').then(response=> response.data[index].asientos_disponibles = seatsAvailables);
      console.log(asientos)
    }*/
  },
  modules: {
  }
})
