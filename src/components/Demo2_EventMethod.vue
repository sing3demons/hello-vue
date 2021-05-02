<template>
  <div>
    <h1>Event and Method</h1>
    <button @click="clickHere">Click</button>
    <button v-on:click="clickHere2('hi')">Click2</button>
  </div>
</template>

<script>
export default {
  name: 'Demo2',
  mounted() {
    console.log('start')
  },
  unmounted() {
    console.log('end')
  },
  methods: {
    clickHere() {
      alert('hello')
    },
    clickHere2(msg) {
      alert(msg)
    },
  },
}
</script>

<style>
</style>