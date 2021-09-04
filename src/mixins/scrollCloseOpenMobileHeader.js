export default {
    data() {
        return {
        }
    },
    methods: {
        wheel: function (ev) {
            if (ev.deltaY < 0) {
                this.$store.commit('openHeader')
            } else if (ev.deltaY > 0) {
                this.$store.commit('closeHeader')
            } 
        }
    },
    created() {
        window.addEventListener('scroll', this.wheel);
    },
    destroyed() {
        window.removeEventListener('scroll', this.wheel);
    },
}