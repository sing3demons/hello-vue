<template>
  <div>
    <form @submit.prevent="submit">
      <!-- v-on:submit.prevent="submit" -->
      <div>
        <label for="first_name">Firstname</label>
        <input
          type="text"
          name="first_name"
          v-model.trim="applicant.first_name"
        />
        <!-- v-model="applicant.first_name" -->
      </div>

      <div>
        <label for="last_name">Lastname</label>
        <input type="text" name="last_name" v-model="applicant.last_name" />
      </div>

      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <div>
        <select name="courses" v-model="applicant.course">
          <option value="react">React</option>
          <option value="vue">vue</option>
          <option value="angular">Angular</option>
        </select>
      </div>

      <div>
        <button type="button" @click="clear">Clear</button>
        <button type="submit" @click="submit">Submit</button>
      </div>
    </form>

    <div>#Spy {{ JSON.stringify(applicant) }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applicant: {
        first_name: '',
        last_name: '',
        sex: 'male',
        course: 'vue',
      },
    };
  },

  methods: {
    submit() {
      // e.preventDefault();
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        first_name: '',
        last_name: '',
        sex: 'male',
        course: 'vue',
      };
    },
  },
};
</script>

<style>
</style>