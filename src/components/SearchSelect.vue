<template>
  <div class="panel__search">
    <form action="" class="panel__form">
      <input type="text" class="panel__input" v-model="searchQuery" />
      <button type="submit" class="panel__run-search" @click.prevent="">
        <img src="@/assets/images/magnifier.png" alt="search" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "search-select",
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    searchContent() {
      
    },
  },
};
</script>

<style scoped>
.panel__search {
  background-color: #264d5c;
  border-radius: 20px;
  margin-left: 20px;
}
.panel__run-search,
.panel__input {
  border: none;
  background-color: #264d5c;
}
.panel__form {
  display: flex;
  height: 60px;
  width: 760px;
}
.panel__run-search {
  display: flex;
  align-items: center;
  justify-content: center;
}
.panel__run-search {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 80px;
  border-left: 1px solid #182f37;
  padding-right: 15px;
}
.panel__input {
  border-radius: 20px;
  width: 100%;
  outline: none;
  padding: 20px;
  color: white;
  font-size: 20px;
}

@media (max-width: 1690px) {
  .panel__form {
    width: 600px;
  }
}
@media (max-width: 1525px) {
  .panel__form {
    width: 600px;
    height: 45px;
  }
  .panel__run-search img {
    width: 23.5px;
    height: 24px;
  }
}
@media (max-width: 1290px) {
  .panel__form {
    width: 420px;
    margin-left: 10px;
  }
}
@media (max-width: 1060px) {
  .panel__form {
    margin-left: 0;
  }
}
@media (max-width: 890px) {
  .panel__form {
    height: 35px;
  }
  .panel__search {
    border-radius: 10px;
    margin-left: 10px;
    width: 400px;
  }
  .panel__input {
    height: 15px;
    font-size: 16px;
    padding: 10px;
  }
  .panel__run-search {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 50px;
  }
  .panel__run-search img {
    width: 16px;
    height: 16px;
    padding-right: 0px;
  }
}
@media (max-width: 890px) {
  .panel__search {
    width: 410px;
  }
}
@media (max-width: 620px) {
  .panel__search {
    width: 350px;
  }
  .panel__form {
    width: 100%;
    height: 25px;
  }
  .panel__input {
    height: 5px;
    font-size: 12px;
    padding: 10px;
  }
  .panel__run-search {
    width: 40px;
  }
}
@media (max-width: 540px) {
  .panel__search {
    width: 300px;
  }
}
@media (max-width: 500px) {
  .panel__search {
    width: 250px;
  }
}
@media (max-width: 450px) {
  .panel__search {
    width: 200px;
  }
}
@media (max-width: 400px) {
  .panel__search {
    width: 170px;
  }
}
@media (max-width: 350px) {
  .panel__search {
    margin-left: 5px;
  }
}
</style>