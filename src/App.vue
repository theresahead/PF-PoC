<template>
  <!-- <Card>
    <Header />
  </Card> -->
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<script>
// import Header from "@/components/Header.vue";
// import Card from "@/components/Card.vue";
export default {
  // name: "Home",
  components: {
    // Header,
    // Card,
  },
};
</script>

<style lang="scss">
// todo:
body {
  background-color: #f7f7f7;
  padding: 1rem;
  font-family: "Lato", sans-serif;
}
.greeting {
  font-size: 1.5rem;
  font-weight: bold;
}
.title,
h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
