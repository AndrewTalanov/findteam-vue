<template>
  <div class="investors__wrapper all-tab__wrapper">
    <div class="investors__inner all-tab__inner all-tab__with-cards">
      <div class="investors__item all-card__item" v-for="card in cards" :key="card.id">
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
@media (max-width: 1550px) {
  .investors__inner {
    margin-top: 20px;
  }
  .investors__body {
    font-size: 15px;
  }
}
@media (max-width: 1461px) {
  .investors__body {
    font-size: 16px;
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