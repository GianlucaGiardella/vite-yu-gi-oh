<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <select v-model="store.filter.value">
    <option value="Tutti">Tutti</option>
    <option
      v-for="archetype in store.filter.archetypes"
      :key="archetype.archetype_name"
      :value="archetype.archetype_name"
    >
      {{ archetype.archetype_name }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
select {
  padding: 0.5rem;
  padding-inline-end: 4rem;
  border: unset;
  border-radius: 0.2rem;
  background-color: white;
}
</style>
