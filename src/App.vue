<template>
  <div id="app">
    <TheHeader />
    <transition mode="out-in">
      <router-view />
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,900&display=swap");
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

/* .VueCarousel-navigation-prev,
.VueCarousel-navigation-next {
  padding: 0px !important;
} */

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}
</style>
