<template>
  <div class="card__wrapper">
    <div class="card__inner">
      <div
        class="card__item"
        v-for="card in cards"
        :key="card.id"
      >
        <div class="card__content">
          <div class="card__header">
            <img :src="card.iconURL" alt="icon" />
            <p class="card__name">{{card.nameCard}}</p>
            <p class="card__profile">{{card.nameProfile}}</p>
          </div>
          <p class="card__title">
            {{card.titleCard.slice(0, titleSlice) + threeDots}}
          </p>
          <p class="card__body">
            {{card.contentBody.slice(0, bodySlice) + threeDots}}
          </p>
          <div class="card__footer">
            <img src="../assets/images/warning.png" alt="warn" />
            <img
              class="dontknow"
              src="../assets/images/dontknow.png"
              alt="warn"
            />
            <img src="../assets/images/arrow_down.png" alt="down" />
            <p class="card__popularity">{{card.popularityCard}}</p>
            <img src="../assets/images/arrow_up.png" alt="up" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodySlice: 400,
      titleSlice: 90,
      widthBrows: null,
      threeDots: "...",
      cards: [
        {
          id: 1,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "999" 
        },
        {
          id: 2,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "-352" 
        },
        {
          id: 3,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "2" 
        },
        {
          id: 4,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent aLorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "2" 
        },
        {
          id: 5,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "2" 
        },
        {
          id: 6,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "2" 
        },
        {
          id: 7,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "2" 
        },
        {
          id: 8,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "2" 
        },
        {
          id: 9,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "2" 
        },
        {
          id: 10,
          iconURL: require("../assets/images/card_icon.png") ,
          nameCard: "Партнер",
          nameProfile: "Александр",
          titleCard: "orem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sadorem ipsum dolor sit amet, elit. ff Integer enim urna sd Integerenim urna sd fsd dsf sad",
          contentBody: "Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integerenim urna, interdum sit amet tempor et, accumsan vitae libero. Nullafacilisi. Praesent a odio eget arcu pharetra ullamcorper. Sed acpellentesque enim. fs fdsaf sd ffads fdszf asdf dsf dsaf asdf fsffdasf Lorem ipsum dolor sit amet, consectetff adipiscing elit. Integer enim urna, interdum sit amet tempor et, accumsan vitae libero. Nulla facilisi. Praesent a",
          popularityCard: "2" 
        },
      ]
    };
  },
  methods: {
    forThreeDots() {
      if (this.widthBrows > 1840) {
        this.bodySlice = 400
        this.titleSlice = 90
      } else if (this.widthBrows > 1461) {
        this.bodySlice = 370
        this.titleSlice = 80
      } else if (this.widthBrows > 1249) {
        this.bodySlice = 400
        this.titleSlice = 90
      } else if (this.widthBrows > 1210) {
        this.bodySlice = 370
        this.titleSlice = 60
      } else if (this.widthBrows > 1072) {
        this.bodySlice = 300
        this.titleSlice = 40
      } else if (this.widthBrows > 981) {
        this.bodySlice = 250
        this.titleSlice = 40
      } else if (this.widthBrows > 851) {
        this.bodySlice = 400
        this.titleSlice = 90
      } else if (this.widthBrows > 750) {
        this.bodySlice = 380
        this.titleSlice = 60
      } else if (this.widthBrows > 550) {
        this.bodySlice = 600
        this.titleSlice = 90
      } else if (this.widthBrows > 420) {
        this.bodySlice = 400
        this.titleSlice = 50
      } else if (this.widthBrows > 319) {
        this.bodySlice = 270
        this.titleSlice = 45
      } 
      
    },
    updateWidth() {
      this.widthBrows = window.innerWidth;
    }
  },
  created() {
    this.widthBrows = window.innerWidth;
    window.addEventListener('resize', this.updateWidth);
    window.addEventListener('resize', this.forThreeDots);
  }
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
  height: 90vh;
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
  background-color: #1c3844;
  height: 380px;
  margin-bottom: 15px;
}
.card__header img {
  width: 18px;
}
.card__content {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
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
.card__title {
  font-size: 18px;
  margin-bottom: 12px;
}
.card__body {
  font-size: 16px;
}
.card__footer {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 15px;   
  right: 10px;
}
.card__popularity {
  margin: 0 5px 0 5px;
}
.dontknow {
  margin: 0 10px 0 10px;
}
@media (max-width: 1734px) {
  .card__title {
    margin-bottom: 6px;
  }
}
@media (max-width: 1700px) {
  .card__inner {
    width: 95%;
  }
}
@media (max-width: 1595px) {
  .card__inner {
    grid-column-gap: 15px;
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
  .card__title {
    font-size: 16;
  }
  .card__body {
    font-size: 15px;
  }
}
@media (max-width: 1461px) {
  .card__inner {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }
  .card__item {
    margin-bottom: 30px;
  }
  .card__title {
    font-size: 18;
  }
  .card__body {
    font-size: 16px;
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
@media (max-width: 981px) {
  .card__inner {
    grid-template-columns: repeat(2, 1fr);
  }
  .card__item {
    height: 350px;
  }
}
@media (max-width: 750px) {
  .card__inner {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>