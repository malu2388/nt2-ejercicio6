import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colores: [],
        colorCount: 6,
        winnerColor: '',
        message: ''
    },
    actions: {
        generarColores({ commit }) {
            let colores = [];
            for (let i = 0; i < this.state.colorCount; i++) {
                colores.push(createRandomStringColor());
            }
            let winnerColor = pickWinner(colores, this.state.colorCount);
            console.log(colores);
            commit('setColores', colores);
            commit('setWinnerColor', winnerColor);
            commit('setMessage', '');
        },

        cambiarDificultad({ commit }, colorCount) {
            console.log(colorCount);
            commit('setColorCount', colorCount);
        },

        cambiarMensaje({ commit }, message) {
            console.log(message);
            commit('setMessage', message);
        },

        win({ commit }) {
            let colores = [];
            for (let i = 0; i < this.state.colorCount; i++) {
                colores.push(this.state.winnerColor);
            }
            commit('setColores', colores);
        },
    },

    mutations: {
        setColores(state, colores) {
            state.colores = colores
        },
        setWinnerColor(state, winnerColor) {
            state.winnerColor = winnerColor
        },

        setColorCount(state, colorCount) {
            state.colorCount = colorCount
        },

        setMessage(state, message) {
            state.message = message
        },
    }
})

function createRandomStringColor() {
    var newColor =
        "rgb(" +
        randomInt() +
        ", " +
        randomInt() +
        ", " +
        randomInt() +
        ")";
    return newColor;
}

function pickWinner(colores, colorCount) {
    return colores[Math.floor(Math.random() * colorCount)];
}

function randomInt() {
    return Math.floor(Math.random() * 256);
}