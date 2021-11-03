<template>
  <router-link class="product-link" :to="[link]">
    <img :src="[imgPath]" />
    <p>{{ linkText }}</p>
  </router-link>
</template>

<script>
export default {
  name: "IconLink",
  props: {
    imgPath: String,
    linkText: String,
    link: String,
  },
};
</script>

<style lang="scss">
.product-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 1rem;
  img {
    height: 60px;
    width: 60px;
    margin-right: 1rem;
  }
  p {
    color: #000;
  }
}
</style>
