<template>
  <div class="card__wrapper">
    <div class="card__inner">
      <div class="card__item"></div>
      <div class="card__item"></div>
      <div class="card__item"></div>
      <div class="card__item"></div>
      <div class="card__item"></div>
      <div class="card__item"></div>
      <div class="card__item"></div>
      <div class="card__item"></div>
      <div class="card__item"></div>
      <div class="card__item"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  background-color: red;
}
.card__inner {
  width: 90%;
  height: 95%;
  overflow-x: hidden;
  background-color: blue;
  margin: 0 auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
}
.card__item {
  margin-bottom: 30px;
  height: 380px;
  background-color: green;
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