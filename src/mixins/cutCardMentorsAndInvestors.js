export default {
    data() {
        return {
            bodySlice: null,
            spheraSlice: null,
            threeDots: "...",
        }
    },
    methods: {
        forThreeDots() {
            if (this.$store.state.widthBrows > 1860) {
                this.bodySlice = 360;
                this.spheraSlice = 60;
            } else if (this.$store.state.widthBrows > 1461) {
                this.bodySlice = 350;
                this.spheraSlice = 40;
            } else if (this.$store.state.widthBrows > 1249) {
                this.bodySlice = 350;
                this.spheraSlice = 40;
            } else if (this.$store.state.widthBrows > 1210) {
                this.bodySlice = 350;
                this.spheraSlice = 40;
            } else if (this.$store.state.widthBrows > 1072) {
                this.bodySlice = 250;
                this.spheraSlice = 40;
            } else if (this.$store.state.widthBrows > 981) {
                this.bodySlice = 220;
                this.spheraSlice = 30;
            } else if (this.$store.state.widthBrows > 851) {
                this.bodySlice = 400;
                this.spheraSlice = 90;
            } else if (this.$store.state.widthBrows > 750) {
                this.bodySlice = 300;
                this.spheraSlice = 40;
            } else if (this.$store.state.widthBrows > 550) {
                this.bodySlice = 500;
                this.spheraSlice = 60;
            } else if (this.$store.state.widthBrows > 420) {
                this.bodySlice = 400;
                this.spheraSlice = 60;
            } else if (this.$store.state.widthBrows > 340) {
                this.bodySlice = 340;
                this.spheraSlice = 45;
            } else if (this.$store.state.widthBrows > 330) {
                this.bodySlice = 300;
                this.spheraSlice = 45;
            } else if (this.$store.state.widthBrows > 318) {
                this.bodySlice = 270;
                this.spheraSlice = 45;
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

