export default {
    data() {
        return {
            bodySlice: null,
            sphereSlice: null,
            threeDots: "...",
        }
    },
    methods: {
        forThreeDots() {
            if (this.$store.state.widthBrows > 1860) {
                this.bodySlice = 360;
                this.sphereSlice = 60;
            } else if (this.$store.state.widthBrows > 1461) {
                this.bodySlice = 350;
                this.sphereSlice = 40;
            } else if (this.$store.state.widthBrows > 1249) {
                this.bodySlice = 350;
                this.sphereSlice = 40;
            } else if (this.$store.state.widthBrows > 1210) {
                this.bodySlice = 350;
                this.sphereSlice = 40;
            } else if (this.$store.state.widthBrows > 1072) {
                this.bodySlice = 250;
                this.sphereSlice = 40;
            } else if (this.$store.state.widthBrows > 981) {
                this.bodySlice = 220;
                this.sphereSlice = 30;
            } else if (this.$store.state.widthBrows > 851) {
                this.bodySlice = 390;
                this.sphereSlice = 90;
            } else if (this.$store.state.widthBrows > 750) {
                this.bodySlice = 300;
                this.sphereSlice = 40;
            } else if (this.$store.state.widthBrows > 550) {
                this.bodySlice = 500;
                this.sphereSlice = 60;
            } else if (this.$store.state.widthBrows > 420) {
                this.bodySlice = 400;
                this.sphereSlice = 60;
            } else if (this.$store.state.widthBrows > 340) {
                this.bodySlice = 340;
                this.sphereSlice = 45;
            } else if (this.$store.state.widthBrows > 330) {
                this.bodySlice = 300;
                this.sphereSlice = 45;
            } else if (this.$store.state.widthBrows > 318) {
                this.bodySlice = 270;
                this.sphereSlice = 45;
            }
        },
    },
    created() {
        window.addEventListener("resize", this.forThreeDots);
    },
    mounted() {
        this.forThreeDots();
    },
    watch: {
        "$store.state.widthBrows": function () {
            this.forThreeDots();
        },
    },
}

