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
  computed: {
    filteredCardList() {
      return this.store.cardList.filter((card) => {
        return (
          this.store.filter.value === "Tutti" ||
          this.store.filter.value === card.archetype
        );
      });
    },
  },
};
</script>

<template>
  <div>
    <Results :cardFound="filteredCardList.length" />
    <ul>
      <Card v-for="card in filteredCardList" :key="card.id" :cardObj="card" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 100%;
  padding: 2rem;
  background-color: white;
}
ul {
  height: 540px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  background-color: white;
  overflow-y: scroll;
}
</style>
