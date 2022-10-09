import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    peliculas: [],
    pelicula: {},
    contador: 0,
    mostrarCine: false,
    showModal: false,
    butacas: [],
    cleanButacas: [],
    id: []
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
      if (state.pelicula !== state.peliculas[index.value]) {
        state.id = index.value;
        state.pelicula = state.peliculas[index.value];
      }
    },
    showCine: (state) => {
      if (state.pelicula)
        state.mostrarCine = true;
      else
        state.mostrarCine = false;
    },
    modal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
    compraButacas: (state, id) => {
      state.butacas.push(id);
    },
    borrarButacas: (state, id) => {
      let myIndex = state.butacas.indexOf(id)
      state.butacas.splice(myIndex, 1);
    }
  },
  actions: {
    async getPelis({ commit }) {
      const movies = await axios.get('http://localhost:3000/results')
        .then(response => response.data)
        .catch((error) => console.log(error));
      commit('pelis', movies);
    }
  },
  modules: {
  }
})
