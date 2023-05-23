<script>
import Results from "./Results.vue";
import Card from "./Card.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Results,
    Card,
  },
};
</script>

<template>
  <div>
    <Results />
    <ul>
      <Card
        v-for="card in store.cardList"
        :key="card.id"
        :cardObj="card"
        class="flex-item"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
div {
  padding: 2rem;
  background-color: white;
}
ul {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  background-color: white;
}
</style>
