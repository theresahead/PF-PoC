<template>
  <Card class="product">
    <img :src="[icon]" />
    <h3>{{ title }}</h3>
    <img class="rating" :src="[rating]" />
    <p>{{ text }}</p>
    <Button label="Instant Apply" primary spaceBetween />
    <Button label="Learn More" primary />
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
export default {
  components: {
    Card,
    Button,
  },
  props: {
    icon: String,
    title: String,
    rating: String,
    text: String,
  },
};
</script>

<style lang="scss">
.product {
  max-width: 60%;
  h3 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }
  p {
    margin: 0 0 1rem 0;
    font-size: 0.75rem;
    color: #999;
  }
  .rating {
    max-width: 153px;
    margin-bottom: 7px;
  }
}
</style>
