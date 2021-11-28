<template>
  <!-- <Card>
    <Header />
  </Card> -->
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
  <div class="subscribe-container">
    <button @click="subscribe">Subscribe to notifications</button>
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";
// import Card from "@/components/Card.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Home",
  components: {},
  setup() {
    // mounted
    onMounted(() => {
      console.log("setup initiated");
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").catch(function (err) {
          console.error(err);
        });
      }
    });
  },
  methods: {
    async subscribe() {
      console.log("subscribe()");
      let sw = await navigator.serviceWorker.ready;
      console.log(sw);
      let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BLcuWb1dUakQj2fU1NGkVN3EblwjNuImz-iRogjrQxiyYC6sWlsS4AgMY2LcYQviHfHj0_EPUTMv05G3ZClZS2E",
      });
      console.log(push);
      console.log(JSON.stringify(push));
    },
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
