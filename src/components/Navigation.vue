<template>
  <nav>
    <Card>
      <div :class="[isOpen ? 'open' : '', 'nav-top']">
        <div class="user-icon"></div>
        <p class="nav-title title">{{ title }}</p>
        <div class="nav-right">
          <Hamburger
            @btn-click="$emit('toggle-nav')"
            :open="[isOpen]"
            v-if="isLoggedIn"
          />
          <p class="nav-title title" v-else>Login</p>
        </div>
      </div>
      <div :class="[isOpen ? 'open' : '', 'nav-bottom']">
        <!-- <Button
          :v-for="navLink in navLinks"
          class="nav-link"
          :label="navLink.name"
          linkStyle
        /> -->
        <Button class="nav-link" label="Purpose Progress" linkStyle />
        <Button class="nav-link" label="Credit Hub" linkStyle />
        <Button class="nav-link" label="Products" linkStyle />
        <Button class="nav-link" label="Customer Info" linkStyle />
      </div>
    </Card>
  </nav>
</template>

<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import Hamburger from "@/components/Hamburger.vue";

export default {
  name: "Navigation",
  props: {
    title: String,
    isLoggedIn: Boolean,
    isOpen: Boolean,
    navLinks: Array,
  },
  components: {
    Card,
    Button,
    Hamburger,
  },
};
</script>

<style lang="scss">
.nav-top {
  display: flex;
  align-items: center;
}
.nav-top.open {
  margin-bottom: 1rem;
}
.nav-bottom {
  display: none;
}
.nav-bottom.open {
  text-align: end;
  height: auto;
  display: block;
}
.nav-title {
  display: inline;
  margin: 0;
}
.user-icon {
  height: 36px;
  width: 36px;
  background-color: #c4c4c4;
  border-radius: 50px;
  display: inline-block;
  margin-right: 1rem;
}
.nav-right {
  margin-left: auto;
}
.nav-link {
  display: block;
  font-size: 1rem;
  margin-bottom: 1rem;
}
</style>
