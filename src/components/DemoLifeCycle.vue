<template>
  <h1>Demo life cycle</h1>

  <input ref="myInput" type="text" />

  <p>{{ count }}</p>

  <button class="btn btn-success" @click="handleIncrement">Increment</button>

  <ChildLifeCycle v-if="count % 2 === 0" />
</template>
<script>
import ChildLifeCycle from "./ChildLifeCycle.vue";

export default {
  name: "DemoLifeCycle",
  components: {
    ChildLifeCycle,
  },
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
  beforeMount() {
    console.log("beforeMount", this.$refs.myInput);
  },
  mounted() {
    console.log("mounted", this.$refs.myInput);
    this.$refs.myInput.focus();
  },
  beforeUpdate() {
    console.log("Loading = true");
  },
  updated() {
    console.log("Loading = false");
  },
};
</script>
<style scoped></style>
