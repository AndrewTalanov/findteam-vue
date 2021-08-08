<template>
    <div class="panel__search">
        <form action="" class="panel__form">
            <button class="panel__select">
                <p>All</p>
                <img src="@/assets/images/dropdown.png" alt="select">
            </button>
            <input type="text" class="panel__input">
            <button type="submit" class="panel__run-search">
                <img src="@/assets/images/magnifier.png" alt="search">
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'search-select'
}
</script>

<style scoped>
    .panel__search{
        background-color: #264D5C;
        border-radius: 20px;
        margin-left: 20px;
    }
    .panel__select, .panel__run-search, .panel__input{
        border: none;
        background-color: #264D5C;
    }
    .panel__form{
        display: flex;
        height: 60px;
        width: 760px;
    }
    .panel__select, .panel__run-search{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .panel__select{
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        width: 115px;
        font-size: 28px;
        border-right: 1px solid #182F37;
    }
    .panel__select img{
        margin-left: 10px;
    }
    .panel__run-search{
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        width: 80px;
        border-left: 1px solid #182F37;
        padding-right: 15px;
    }
    .panel__input{
        width: 100%;
        outline: none;
        padding: 20px;
        color: white;
        font-size: 20px;
    }

    @media (max-width: 1690px) {
        .panel__form{
            width: 600px;
        }
    }
    @media (max-width: 1525px) {
        .panel__form{
            width: 550px;
            height: 45px;
        }
        .panel__select p{
            font-size: 20px;
        }
        .panel__select img{
            width: 18px;
            height: 18px;
        }
        .panel__run-search img{
            width: 23.5px;
            height: 24px;
        }
    }
    @media (max-width: 1290px) {
        .panel__form{
            width: 420px;
            margin-left: 10px;
        }
    }
    @media (max-width: 1060px) {
        .panel__form{
            margin-left: 0;
        }
    }
    @media (max-width: 890px) {
        .panel__form{
            height: 35px;
        }
        .panel__search{
            border-radius: 10px;
            margin-left: 10px;
            width: 400px;
        }
        .panel__input{
            height: 15px;
            font-size: 16px;
            padding: 10px;
        }
        .panel__run-search{
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            width: 50px;
        }
        .panel__run-search img{
            width: 16px;
            height: 16px;
            padding-right: 0px;
        }
        .panel__select p{
            font-size: 16px;
        }
        .panel__select img{
            width: 16px;
            height: 14px;
            margin-left: 5px;
        }
        .panel__select{
            width: 90px;
        }
    }
    @media (max-width: 890px) {
        .panel__search{
            width: 410px;
        }
    }
    @media (max-width: 620px) {
        .panel__search{
            width: 350px;
        }
        .panel__form{
            width: 100%;
            height: 25px;
        }
        .panel__input{
            height: 5px;
            font-size: 12px;
            padding: 10px;
        }
        .panel__select{
            width: 45px;
        }
        .panel__select p{
            display: none;
        }
        .panel__select img{
            width: 12px;
            height: 10px;
        }
        .panel__run-search{
            width: 40px;
        }
    }
    @media (max-width: 540px) {
        .panel__search{
            width: 300px;
        }
    }
    @media (max-width: 500px) {
        .panel__search{
            width: 250px;
        }
    }
    @media (max-width: 450px) {
        .panel__search{
            width: 200px;
        }
    }
    @media (max-width: 400px) {
        .panel__search{
            width: 170px;
        }
    }
    @media (max-width: 350px) {
        .panel__search{
            margin-left: 5px;
        }
    }
</style>