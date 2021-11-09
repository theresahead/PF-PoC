<template>
  <div class="greeting">
    <img class="greeting-icon" :src="[icon]" />
    <h3 class="greeting-name">{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  props: {
    icon: String,
    name: String,
  },
};
</script>

<style lang="scss">
.greeting {
  display: flex;
  align-items: center;
  height: auto;
  img {
    margin-right: 1rem;
    max-height: 4.25rem;
    display: inline;
  }
  h3 {
    font-size: 3rem;
    display: inline;
    margin: 0;
  }
}
</style>
