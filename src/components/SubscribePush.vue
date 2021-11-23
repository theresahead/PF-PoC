<template>
  <div class="subscribe-container">
    <button @click="subscribe">Subscribe to notifications</button>
  </div>
</template>

<script>
export default {
  name: "Accounts",
  setup() {
    // mounted
    console.log("setup initiated");
    let sw = navigator.serviceWorker.register("../sw.js");
    console.log(sw);
  },
  methods: {
    async subscribe() {
      console.log("subscribe()");
      let sw = await navigator.serviceWorker.ready;
      let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BIx7cqPyH_T-nn1Xh7IwbilnMtIVeNUJfvRQX-LYlT1R9Sd-5L8oklmgbG4vIuvW0bQwtGQT5tfPJT3l3KjEs2w",
      });
      console.log(JSON.stringify(push));
    },
  },
};
</script>

<style lang="scss"></style>
