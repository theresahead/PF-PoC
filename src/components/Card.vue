<template>
  <div :class="[noPadding ? '' : 'card-padding', 'card']">
    <!-- {{ noPadding }} -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    noPadding: Boolean,
  },
};
</script>

<style lang="scss">
.card {
  background: #fff;
  border-radius: 15px;
  margin-bottom: 2rem;
}
.card-padding {
  padding: 1rem;
}
</style>
