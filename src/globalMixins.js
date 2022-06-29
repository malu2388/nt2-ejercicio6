import Vue from 'vue'

const miMixinGlobal = {
    methods: {},
    computed: {
        colores() {
            let colores = this.$store.state.colores
            return colores
        },
        winnerColor() {
            let winnerColor = this.$store.state.winnerColor
            return winnerColor
        },

        message() {
            let message = this.$store.state.message
            return message
        },

        colorCount() {
            let colorCount = this.$store.state.colorCount
            return colorCount
        }
    }
}

Vue.mixin(miMixinGlobal)