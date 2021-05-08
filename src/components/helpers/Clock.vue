<template>
  <div>
    <slot name="vslot" />
    แบบธรรมดา: {{ time }} <br />
    <slot>Now (default)</slot> {{ time }}
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format("MM/DD/YY hh:mm:ss");
    }, 1000);
  },
};
</script>

<style>
</style>