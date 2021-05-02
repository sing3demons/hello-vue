<template>
  <div>
    <H1>Data</H1>
    <button
      @click="
        count++;
        isLogin = true;
      "
    >
      count++
    </button>
    <br />
    <span>{{ count }}</span
    ><br />
    <span v-if="isLogin == true">v-if= {{ message }}</span
    ><br />
    <span>{{ isLogin }}</span>
    <div>
      <h2>
        {{ account }} first name: {{ account.fName }} last name:
        {{ account.lName }}
      </h2>
    </div>
    <div>
      <h3>
        {{ skill }}
      </h3>
      <br />
      <h4>
        <ul>
          <li v-for="(item, index) in skill" :key="index">
            v-for =
            {{ index + 1 }}: {{ item }},
          </li>
        </ul>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: 'Hello',
      isLogin: false,
      account: {
        fName: 'kumneung',
        lName: 'punthong',
      },
      skill: ['java', 'go', 'react', 'vue', 'flutter'],
    };
  },
};
</script>

<style scoped>
li {
  display: inline-block;
}
</style>>
