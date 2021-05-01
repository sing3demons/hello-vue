<template>
  <div>
    <h1>v-model</h1>
    <input type="text" placeholder="input" v-model="message" />
    <button @click="message = ''">Reset</button>
    <br />
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
}
</script>

<style>
</style>