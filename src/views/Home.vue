<template>
  <div class="home">
    <Banner />
    <HomeServicos />
    <SeguradorasHome />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import HomeServicos from "@/components/HomeServicos.vue";
import SeguradorasHome from "@/components/SeguradorasHome.vue";

export default {
  components: {
    Banner,
    HomeServicos,
    SeguradorasHome
  },
  created() {
    document.title = "Funilaria Torres";
  }
};
</script>
