<template>
  <Card class="promotion" noPadding>
    <img :src="[icon]" />
    <div>
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Article",
  components: {
    Card,
  },
  props: {
    icon: String,
    title: String,
    text: String,
  },
};
</script>

<style lang="scss">
.promotion {
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  img {
    width: 60px;
    height: 60px;
    margin-right: 1.5rem;
  }
  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 5px 0;
  }
  p {
    font-weight: lighter;
    margin: 0;
    word-wrap: break-word;
  }
}
</style>
