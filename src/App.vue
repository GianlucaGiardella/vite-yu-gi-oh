<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppMain,
  },
  created() {},
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
