export default {
    data() {
        return {
            bodySlice: null,
            titleSlice: null,
            threeDots: "...",
        }
    },
    methods: {
        forThreeDots() {
            if (this.$store.state.widthBrows > 1840) {
                this.bodySlice = 400
                this.titleSlice = 90
            } else if (this.$store.state.widthBrows > 1461) {
                this.bodySlice = 370
                this.titleSlice = 80
            } else if (this.$store.state.widthBrows > 1249) {
                this.bodySlice = 400
                this.titleSlice = 90
            } else if (this.$store.state.widthBrows > 1210) {
                this.bodySlice = 370
                this.titleSlice = 60
            } else if (this.$store.state.widthBrows > 1072) {
                this.bodySlice = 300
                this.titleSlice = 40
            } else if (this.$store.state.widthBrows > 981) {
                this.bodySlice = 250
                this.titleSlice = 40
            } else if (this.$store.state.widthBrows > 851) {
                this.bodySlice = 400
                this.titleSlice = 90
            } else if (this.$store.state.widthBrows > 750) {
                this.bodySlice = 380
                this.titleSlice = 60
            } else if (this.$store.state.widthBrows > 550) {
                this.bodySlice = 600
                this.titleSlice = 90
            } else if (this.$store.state.widthBrows > 420) {
                this.bodySlice = 480
                this.titleSlice = 80
            } else if (this.$store.state.widthBrows > 400) {
                this.bodySlice = 440
                this.titleSlice = 80
            } else if (this.$store.state.widthBrows > 340) {
                this.bodySlice = 400
                this.titleSlice = 65
            } else if (this.$store.state.widthBrows > 319) {
                this.bodySlice = 340
                this.titleSlice = 65
            }
        },
    },
    created() {
        window.addEventListener('resize', this.forThreeDots);
    },
    mounted() {
        this.forThreeDots();
    },
    watch: {
        '$store.state.widthBrows': function () {
            this.forThreeDots();
        }
    }
}