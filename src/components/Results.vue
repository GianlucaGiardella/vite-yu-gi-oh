<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    cardFound: Number,
  },
};
</script>

<template>
  <div class="results">
    <p>Found {{ cardFound }} cards in {{ store.cardList.length }}</p>
  </div>
</template>

<style lang="scss" scoped>
.results {
  padding: 1.5rem;
  font-weight: 600;
  color: white;
  background-color: #212529;
}
</style>
