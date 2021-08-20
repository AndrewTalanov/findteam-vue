<template>
  <div class="mentors__wrapper">
    <div class="card__inner">
      <div class="card__item" v-for="card in cards" :key="card.id">
        <div class="card__content">
          <div class="card__header">
            <img :src="card.iconURL" alt="icon" />
            <p class="card__name">{{ card.nameCard }}</p>
            <p class="card__profile">{{ card.nameProfile }}</p>
          </div>
          <p class="card__title">
            {{ card.titleCard.slice(0, titleSlice) + threeDots}}
          </p>
          <p class="card__body">
            {{ card.contentBody.slice(0, bodySlice) + threeDots}}
          </p>
          <div class="card__footer">
            <img src="@/assets/images/warning.png" alt="warn" />
            <img
              class="dontknow"
              src="@/assets/images/dontknow.png"
              alt="warn"
            />
            <img src="@/assets/images/arrow_down.png" alt="down" />
            <p class="card__popularity">{{ card.popularityCard }}</p>
            <img src="@/assets/images/arrow_up.png" alt="up" />
          </div>
        </div>
      </div>
      <div class="mobile-bottom"></div>
    </div>
  </div>
</template>

<script>
import cutContentCard from '@/mixins/cutContentCard';
export default {
  mixins: [cutContentCard],
  data() {
    return {
      cards: [
        {
          id: 1,
          iconURL: require("@/assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "999" 
        },
        {
          id: 2,
          iconURL: require("@/assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "999" 
        },
        {
          id: 3,
          iconURL: require("@/assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "999" 
        },
      ]
    }
  }
};
</script>

<style>
.mentors__wrapper {
  width: 100%;
  height: 90vh;
}
</style>