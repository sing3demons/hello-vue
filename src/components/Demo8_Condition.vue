<template>
  <div>
    <h1>v if</h1>
    <h2 v-if="isShow">if Blink</h2>
    <h2 style="color: red" v-else>else Blink</h2>
  </div>
  <dir><hr></dir>
  <div>
    <h1 @click="click" style="color: blue">click</h1>
    <h2 v-show="clickShow">v-show Blink</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(() => {
      this.isShow = !this.isShow;
    }, 1000);
  },
  methods: {
    click() {
      this.clickShow = !this.clickShow;
    },
  },
  data() {
    return {
      isShow: true,
      clickShow: true,
    };
  },
};
</script>

<style>
</style>