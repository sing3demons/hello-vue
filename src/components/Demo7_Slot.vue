<template>
  <div>
    <Clock> <span style="color: green">เวลาปัจจุบัน : </span> </Clock>
    <hr />
    <Clock />
    <hr />
    <div>
      <Clock>
        <template v-slot:vslot> <h1>v-slot</h1></template>
      </Clock>
    </div>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";
export default {
  name: "Demo7",
  components: { Clock },
};
</script>

<style>
</style>