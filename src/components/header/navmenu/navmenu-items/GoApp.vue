<template>
  <div class="goapp__wrapper">
    <img src="@/assets/images/goapp.png" alt="GO APP" />
    <button class="goapp__button">Скачать</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.goapp__wrapper {
  width: 340px;
  height: 100%;
  border-bottom-left-radius: 20px;
  background-color: #264d5c;
  display: flex;
  justify-content: center;
  align-items: center;
}
.goapp__button {
  width: 150px;
  height: 60px;
  border: none;
  border-radius: 20px;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
  color: white;
  background: linear-gradient(to right, #000000 40%, #1f252c);
  margin-left: 25px;
}

@media (max-width: 1525px) {
  .goapp__wrapper {
    width: 230px;
  }
  .goapp__wrapper img {
    width: 60px;
  }
  .goapp__button {
    width: 90px;
    font-size: 16px;
    margin-left: 15px;
  }
}
@media (max-width: 1170px) {
  .goapp__wrapper {
    width: 210px;
  }
  .goapp__button {
    height: 40px;
    font-size: 14px;
    margin-left: 10px;
  }
}
@media (max-width: 1060px) {
  .goapp__wrapper {
    margin-left: 15px;
  }
}
@media (max-width: 890px) {
  .goapp__wrapper {
    width: 160px;
  }
  .goapp__wrapper img {
    width: 43px;
  }
  .goapp__button {
    width: 70px;
    height: 33px;
    font-size: 12px;
    margin-left: 5px;
  }
}
@media (max-width: 769px) {
  .goapp__wrapper {
    display: none;
  }
}
</style>