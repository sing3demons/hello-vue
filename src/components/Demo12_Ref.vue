<template>
  <div>
    <h1 ref="title">Waiting for change by Ref {{ title }}</h1>
    <input
      ref="input"
      type="text"
      v-model="title"
      placeholder="Thid will be focused automatically"
    />
    <br />
    {{ title }}
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs["title"].textContent = this.title;
    this.$refs["input"].focus();
  },
  data() {
    return {
      title: "sing change Ref",
    };
  },
};
</script>

<style>
</style>