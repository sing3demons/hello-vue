<template>
  <div>
    <h1>Binding</h1>
    <br />
    <div>
      <img v-bind:src="imgUrl" alt="" height="200" />
    </div>
    <a :href="link">vue</a>
    <br />
    <div :class="error">Binding class style</div>
    <div :class="[error, important]">Binding class style array</div>
    <div :style="{ color: color }">Binding style = { color }</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "https://v3.vuejs.org/logo.png",
      link: "https://www.centrilliontech.co.th/blog/3577/vue3-change",
      error: "error_class",
      important: "important",
      color: "green",
    };
  },
};
</script>

<style>
.error_class {
  background: red;
  color: white;
}
.important {
  font-weight: 800;
}
</style>