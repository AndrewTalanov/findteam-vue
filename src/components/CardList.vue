<template>
  <div class="card__wrapper">
    <div class="card__inner">
      <div class="card__item">
        <div class="card__content">
          <div class="card__header">
            <img src="../assets/images/card_icon.png" alt="icon" />
            <p class="card__name">Партнер</p>
            <p class="card__profile">Александр</p>
          </div>
          <p class="card__title">
            Lorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integer
            enim urna sd fsd dsf sad...
          </p>
          <p class="card__body">
            Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer
            enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla
            facilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed ac
            pellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsf
            fdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit.
            Integer enim urna, interdum sit amet tempor et, accumsan vitae
            libero. Nulla facilisi. Praesent a
          </p>
          <div class="card__footer">
            <img src="../assets/images/warning.png" alt="warn">
            <img src="../assets/images/dontknow.png" alt="warn">
            <img src="../assets/images/arrow_down.png" alt="down">
            <p class="card__popularity">999</p>
            <img src="../assets/images/arrow_up.png" alt="up">
          </div>
        </div>
      </div>
      <div class="card__item"></div>
      <div class="card__item"></div>
      <div class="card__item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
  background-color: #0f2027;
}
::-webkit-scrollbar-thumb {
  background-color: #1e3740;
  border-radius: 9em;
}
.card__wrapper {
  width: 100%;
  height: 700px;
  /* background-color: red; */
}
.card__inner {
  width: 90%;
  height: 95%;
  overflow-x: hidden;
  /* background-color: blue; */
  margin: 0 auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
}
.card__item {
  border-radius: 30px;
  background-color: #1C3844;
  height: 380px;
}
.card__header img {
  width: 18px;
}
.card__content{
  width: 90%;
  margin: 0 auto;
}
.card__header {
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.card__name {
  margin: 0 5px 0 10px;
  font-weight: 700;
}
.card__title{
  font-size: 18px;
  margin-bottom: 12px;
}
.card__body{
  font-size: 16px;
}
.card__footer{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

@media (max-width: 1700px) {
  .card__inner {
    width: 95%;
  }
}
@media (max-width: 1550px) {
  .card__inner {
    margin-top: 20px;
    grid-column-gap: 20px;
  }
  .card__item {
    margin-bottom: 20px;
  }
}
@media (max-width: 1440px) {
  .card__inner {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }
  .card__item {
    margin-bottom: 30px;
  }
}
@media (max-width: 1440px) {
  .card__inner {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    width: 98%;
  }
  .card__item {
    margin-bottom: 20px;
  }
}
@media (max-width: 1210px) {
  .card__item {
    height: 330px;
  }
}
@media (max-width: 1024px) {
  .card__item {
    height: 310px;
  }
}
@media (max-width: 981px) {
  .card__inner {
    grid-template-columns: repeat(3, 1fr);
  }
  .card__item {
    height: 270px;
  }
}
</style>