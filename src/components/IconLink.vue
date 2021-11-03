<template>
  <router-link :to="[link ? link : '/about']">
    <div class="product-link">
      <img :src="[imgPath]" />
      <p>{{ linkText }}</p>
    </div>
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
}
</style>
