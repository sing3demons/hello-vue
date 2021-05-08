<template>
  <div id="nav">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Content from "@/components/layout/Content";
export default {
  components: {
    Header,
    Content,
  },
};
</script>


