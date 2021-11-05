<template>
  <router-link
    class="btn"
    :class="{
      'btn-primary': primary,
      'btn-secondary': secondary,
      'btn-link': linkStyle,
      'btn-space': spaceBetween,
    }"
    :to="[link]"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: "Button",
  props: {
    isIcon: Boolean,
    label: String,
    icon: String,
    link: String,
    primary: Boolean,
    secondary: Boolean,
    linkStyle: Boolean,
    spaceBetween: Boolean,
  },
};
</script>

<style lang="scss">
.btn {
  display: inline-block;
  text-decoration: none;
}
.btn-space {
  margin-right: 0.5rem;
}
.btn-primary {
  font-size: 0.625rem;
  padding: 0.625rem 1rem;
  background-color: #757679;
  color: #fff;
  border-radius: 20px;
}
.btn-link {
  font-size: 0.75rem;
  color: black;
  font-weight: bold;
}
</style>
