<script>
export default {
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <li>
    <img :src="cardObj.card_images[0].image_url" />
    <h2>{{ cardObj.name }}</h2>
    <p>{{ cardObj.archetype }}</p>
  </li>
</template>

<style lang="scss" scoped>
.flex-item {
  flex: 0 0 20%;
}

li {
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  background-color: #d48f38;
  color: white;
}

li {
  img {
    display: block;
    width: 100%;
  }

  h2 {
    font-size: 1rem;
    text-align: center;
  }

  p {
    color: black;
  }
}
</style>
