<script>
import Search from "./Search.vue";
import CardList from "./CardList.vue";

export default {
  components: {
    Search,
    CardList,
  },
};
</script>

<template>
  <main>
    <Search />
    <CardList />
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 1000px;
  padding: 0.5rem;
  margin: 1rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
}
</style>
