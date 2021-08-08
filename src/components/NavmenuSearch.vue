<template>
    <div class="panel">
        <vue-button class="button button-add">
            <img src="@/assets/images/add-card.png" alt="add">
        </vue-button>
        <vue-button class="button button-filter">
            <img src="@/assets/images/filter.png" alt="filters">
        </vue-button>
        <search-select></search-select>
    </div>
</template>

<script>
import SearchSelect from './SearchSelect.vue'

export default {
    components: { 
        SearchSelect 
    },

}
</script>

<style scoped>
    .panel{
        display: flex;
        align-items: center;
        margin-left: 90px;
    }
    .button-filter{
        margin-left: 20px;
    }
    .button img{
        margin-top: 5px;
    }
    @media (max-width: 1770px) {
        .panel{
            margin-left: 30px;
        }
    }
    @media (max-width: 1525px) {
        .button{
            width: 45px;
            height: 45px;
            border-radius: 15px;
        }
        .button img{
            width: 25px;
            height: 25px;
        }
    }
    @media (max-width: 890px) {
        .panel{
            margin-left: 0;
        }
        .button{
            width: 35px;
            height: 35px;
            border-radius: 10px;
        }
        .button img{
            width: 20px;
            height: 20px;
        }
        .button-filter{
            margin-left: 10px;
        }
    }
    @media (max-width: 769px) {
        .panel{
            margin-right: 20px;
        }
    }
    @media (max-width: 620px) {
        .button{
            width: 25px;
            height: 25px;
            border-radius: 5px;
        }
        .button img{
            width: 15px;
            height: 15px;
            margin: 3px 0px 0 0;
        }
    }
    @media (max-width: 500px) {
        .panel{
            margin-right: 10px;
        }
    }
    @media (max-width: 350px) {
        .panel{
            margin-right: 5px;
        }
        .button-filter{
            margin-left: 5px;
        }
    }

</style>