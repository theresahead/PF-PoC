<template>
  <Card class="article" noPadding>
    <div class="article-top">
      <img :src="[image]" />
    </div>
    <div class="article-inner">
      <p>{{ text }}</p>
      <Button label="Learn More" linkStyle />
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Article",
  components: {
    Card,
    Button,
  },
  props: {
    image: String,
    text: String,
  },
};
</script>

<style lang="scss">
.article {
}
.article-top {
  background-color: #ececec;
  border-radius: 15px 15px 0 0;
  img {
    width: 100%;
    max-height: 139px;
    object-fit: contain;
  }
}
.article-inner {
  padding: 1rem;
  p {
    margin-top: 0;
    color: #999;
  }
}
</style>
