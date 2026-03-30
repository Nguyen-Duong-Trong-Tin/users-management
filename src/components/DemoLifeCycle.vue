<template>
  <h1>Demo life cycle</h1>

  <input type="text" />

  <p>{{ count }}</p>

  <button class="btn btn-success" @click="handleIncrement">Increment</button>
</template>
<script>
export default {
  name: "DemoLifeCycle",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleIncrement() {
      ++this.count;
    },
  },
  beforeCreate() {
    console.log("beforeCreate", this.count);
    // this.handleIncrement();
  },
  created() {
    console.log("created", this.count);
    this.handleIncrement();
  },
};
</script>
<style scoped></style>
