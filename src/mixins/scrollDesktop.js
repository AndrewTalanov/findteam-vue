import { withScopeId } from "vue";

export default {
    data() {
        return {
            scrollDekstop: 0
        };
    },
    methods: {
        scrollDekstopFunction() {
            if (this.$store.state.widthBrows > 500) {
                if (this.$store.state.closeHeaderMobile) {
                    this.scrollDekstop = 0
                } else {
                    this.scrollDekstop = 20
                }
            } else {
                this.scrollDekstop = 0
            }

        }
    },
    watch: {
        "$store.state.closeHeaderMobile": function () {
            this.scrollDekstopFunction()
        }
    },
    beforeUpdate(){
        this.scrollDekstopFunction()
    }

};