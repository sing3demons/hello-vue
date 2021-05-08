<template>
  <div>
    <h1>Loop</h1>
    <ul>
      <li v-for="(item, index) in fontend" :key="index">
        {{ item }}
      </li>
    </ul>
    <hr />
    <h1>v-model</h1>
    <input type="text" placeholder="title" v-model="course.title" /> <br />
    <input type="number" placeholder="price" v-model="course.price" /> <br />
    <button @click="addCourse">Submit</button>
    <button @click="clearCourse">Clear</button>
    <ul>
      <li v-for="(item, index) in dynamicCourse" :key="index">
        {{ item.title }} {{ item.price }}
        <button @click="removeCourse(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    removeCourse(i) {
      this.dynamicCourse.splice(i, 1);
    },
    clearCourse() {
      this.course = { title: "", price: 0 };
    },
    addCourse() {
      this.dynamicCourse.push(this.course);
      this.course = { title: "", price: 0 };
    },
  },
  data() {
    return {
      course: { title: "", price: 0 },
      dynamicCourse: [],
      fontend: ["Angular", "React", "Vue"],
    };
  },
};
</script>

<style>
</style>