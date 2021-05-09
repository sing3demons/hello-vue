<template>
  <ul>
    <li v-for="(value, index) in filtered" :key="index">
      {{ value }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    filtered() {
      return this.array1.map((item) => `$${item}`);
    },
  },
  data: () => ({
    array1: [1, 2, 3, 4, 5],
  }),

  //   data() {
  //     return {
  //       array1: [1, 2, 3, 4, 5],
  //       accountBalance: 10,
  //     };
  //   },
};
</script>