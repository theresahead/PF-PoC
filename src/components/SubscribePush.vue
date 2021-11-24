<template>
  <div class="subscribe-container">
    <button @click="subscribe">Subscribe to notifications</button>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Accounts",
  setup() {
    // mounted
    onMounted(async () => {
      console.log("setup initiated");
      let sw = await navigator.serviceWorker.register("src/sw.js");
      console.log(sw);
    });
  },
  methods: {
    async subscribe() {
      console.log("subscribe()");
      let sw = await navigator.serviceWorker.ready;
      let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BLcuWb1dUakQj2fU1NGkVN3EblwjNuImz-iRogjrQxiyYC6sWlsS4AgMY2LcYQviHfHj0_EPUTMv05G3ZClZS2E",
      });
      console.log(JSON.stringify(push));
    },
  },
};
</script>

<style lang="scss"></style>
