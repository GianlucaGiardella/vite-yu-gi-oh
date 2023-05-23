<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
      .then((response) => (this.store.cardList = response.data.data));
    axios
      .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then((response) => (this.store.filter.archetypes = response.data));
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./assets/styles/generals.scss" as *;

body {
  background-color: #d48f38;
}
</style>
