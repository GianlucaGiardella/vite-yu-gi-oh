<script>
import Card from "./Card.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Card,
  },
};
</script>

<template>
  <ul>
    <Card
      v-for="card in store.cardList"
      :key="card.id"
      :cardObj="card"
      class="flex-item"
    />
  </ul>
</template>

<style lang="scss" scoped>
ul {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  background-color: white;
}
</style>
