import { reactive } from "vue";

export const store = reactive({
  cardList: [],
  filter: {
    value: "Tutti",
    archetypes: [],
  },
});
