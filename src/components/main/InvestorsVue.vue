<template>
  <div class="investors__wrapper">
    <div class="investors__inner">
      <div class="investors__item" v-for="card in cards" :key="card.id">
        <div class="investors__content">
          <div class="investors__header">
            <img :src="card.iconURL" alt="icon" />
            <p class="investors__profile">{{ card.nameProfile }}</p>
            <div class="investors__menu">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <p class="investors__body">
            {{ card.contentBody.slice(0, bodySlice) + threeDots }}
          </p>
          <div class="investors__footer">
            <p>Сфера: {{ card.sphera.slice(0, spheraSlice) + threeDots }}</p>
            <p>Сумма: {{ card.sum }}</p>
          </div>
        </div>
      </div>
      <div class="mobile-bottom"></div>
    </div>
  </div>
</template>

<script>
import cutCardMentorsAndInvestors from "@/mixins/cutCardMentorsAndInvestors";

export default {
  mixins: [cutCardMentorsAndInvestors],
  data() {
    return {
      cards: [
        {
          id: 1,
          iconURL: require("@/assets/images/navmenu-avatar.png"),
          nameProfile: "Александр",
          contentBody:
            "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          sphera: "Информационные технологии, биоинженерия, трансформатология",
          sum: "до 500т.р.",
        },
        {
          id: 1,
          iconURL: require("@/assets/images/navmenu-avatar.png"),
          nameProfile: "Александр",
          contentBody:
            "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          sphera: "Информационные технологии, биоинженерия, трансформатология",
          sum: "до 500т.р.",
        },
        {
          id: 1,
          iconURL: require("@/assets/images/navmenu-avatar.png"),
          nameProfile: "Александр",
          contentBody:
            "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          sphera: "Информационные технологии, биоинженерия, трансформатология",
          sum: "до 500т.р.",
        },
        {
          id: 1,
          iconURL: require("@/assets/images/navmenu-avatar.png"),
          nameProfile: "Александр",
          contentBody:
            "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          sphera: "Информационные технологии, биоинженерия, трансформатология",
          sum: "до 500т.р.",
        },
        {
          id: 1,
          iconURL: require("@/assets/images/navmenu-avatar.png"),
          nameProfile: "Александр",
          contentBody:
            "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          sphera: "Информационные технологии, биоинженерия, трансформатология",
          sum: "до 500т.р.",
        },
      ],
    };
  }
};
</script>

<style scoped>

.investors__wrapper {
  width: 100%;
  height: 90vh;
}
.investors__inner {
  border-radius: 20px;
  width: 90%;
  height: 95%;
  overflow-x: hidden;
  margin: 0 auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  padding: 2px;
}
.investors__item {
  border-radius: 30px;
  background-color: #1c3844;
  height: 380px;
  margin-bottom: 15px;
  transition: .6s;
  cursor: pointer;
}
.investors__item:hover{
  box-shadow: 0px 0px 5px rgb(231, 206, 206);
}
.investors__content {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.investors__header {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}
.investors__header img {
  width: 36px;
  margin-right: 10px;
}
.investors__profile {
  font-size: 24px;
  margin-right: 15px;
}
.investors__menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.dot {
  width: 5px;
  height: 5px;
  border-radius: 30px;
  background-color: white;
  margin-left: 3px;
}
.investors__body {
  margin-top: 15px;
}
.investors__footer {
  position: absolute;
  bottom: 40px;   
  right: 10px;
}
.investors__footer p {
  margin-top: 5px;
}
.mobile-bottom {
  display: none;
}
@media (max-width: 1700px) {
  .investors__inner {
    width: 95%;
  }
}
@media (max-width: 1595px) {
  .investors__inner {
    grid-column-gap: 15px;
  }
}
@media (max-width: 1550px) {
  .investors__inner {
    margin-top: 20px;
    grid-column-gap: 20px;
  }
  .investors__item {
    margin-bottom: 20px;
  }
  .investors__body {
    font-size: 15px;
  }
}
@media (max-width: 1461px) {
  .investors__inner {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }
  .investors__item {
    margin-bottom: 30px;
  }
  .investors__body {
    font-size: 16px;
  }
}
@media (max-width: 1440px) {
  .investors__inner {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    width: 98%;
  }
  .investors__item {
    margin-bottom: 20px;
  }
}
@media (max-width: 1210px) {
  .investors__item {
    height: 330px;
  }
}
@media (max-width: 981px) {
  .investors__inner {
    grid-template-columns: repeat(2, 1fr);
  }
  .investors__item {
    height: 350px;
  }
}
@media (max-width: 750px) {
  .investors__inner {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 500px) {
  .investors__wrapper {
    margin: 0 auto;
  }
  .investors__inner {
    margin: 0 0 0 0;
  }
  .mobile-bottom {
    display: block;
    width: 100%;
    height: 40px;
  }
}
</style>