import axios from "axios"

export default {
    methods: {
        async getDataCard() {
            try {
                const response = await axios.get('');
                // console.log(response)
                console.log('ответ')
            } catch(e) {
                console.log('ошибка')
            }
        }
    },
    created() {
        this.getDataCard()
    }
}