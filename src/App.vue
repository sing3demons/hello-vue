<template>
  <div id="nav">
    <Header />
    <br />
  </div>
  <router-view />
</template>

<script>
import Header from "@/components/layout/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>


