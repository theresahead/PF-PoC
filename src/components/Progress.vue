<template>
  <Card class="progress">
    <h3>{{ title }}</h3>
    <div class="progress-inner">
      <img :src="[icon]" />
      <p>{{ value }}</p>
      <Button label="Learn More" linkStyle />
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Progress",
  components: {
    Card,
    Button,
  },
  props: {
    title: String,
    icon: String,
    value: String,
  },
};
</script>

<style lang="scss">
.progress {
  width: 50%;
  margin-right: 1.25rem;
  h3 {
    margin: 0;
    max-width: 50%;
    margin-bottom: 5px;
  }
  .btn {
    margin-top: auto;
    align-self: center;
  }
}
.progress-inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
  }
  p {
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
