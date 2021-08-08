<template>
    <div class="account__info">
        <div class="account__avatar">
            <img class="account__avatar-img" src="../assets/images/navmenu-avatar.png" alt="avatar">
        </div>
        <div class="account__vip">
            <img src="../assets/images/vip.png" alt="">
        </div>
        <div class="account__name">
            <p>Алексей Мистахов</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .account__info{
        width: 330px;
        height: 71px;
        display: flex;
        align-items: center;
        margin-left: 15px;
        position: relative;
    }
    .account__vip{
        position: absolute;
        top: -5px;
        left: 60px;
    }
    .account__avatar, .account__avatar-img{
        border-radius: 20px;
    }
    .account__name{
        margin-left: 10px;
    }
    .account__name p{
        font-size: 20px;
    }
    .account__avatar-img{
        width: 100%;
    }

    @media (max-width: 1525px) {
        .account__info{
            width: 290px;
        }
        .account__avatar{
            width: 55px;
        }
        .account__vip{
            top: 0px;
            left: 43px;
        }
        .account__vip img{
            width: 15px;
            height: 12.5px;
        }
        .account__name p{
            font-size: 16px;
        }
    }
    @media (max-width: 1170px) {
        .account__info{
            margin-left: 10px;
            width: 190px;
        }
        .account__name p{
            font-size: 12px;
        }
        .account__vip{
            left: 42px;
        }
    }
    @media (max-width: 980px) {
        .account__info{
            width: 75px;
        }
        .account__name{
            display: none;
        }
    }
    @media (max-width: 380px) {
        .account__avatar{
            width: 45px;
        }
        .account__avatar, .account__avatar-img{
            border-radius: 10px;
        }
        .account__vip{
            top: 2px;
            left: 35px;
        }
    }
    @media (max-width: 350px) {
        .account__info{
            width: 55px;
            margin-left: 5px;
        }
    }
</style>