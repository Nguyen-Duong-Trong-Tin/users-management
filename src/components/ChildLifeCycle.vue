<template>
  <h1>Child life cycle</h1>
</template>
<script>
export default {
  name: "ChildLifeCycle",
  mounted() {
    this.hello = setInterval(() => {
      console.log("ChildLifeCycle is running");
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.hello);
    console.log("ChildLifeCycle is unmounted");
  },
  unmounted() {
    console.log("ChildLifeCycle is unmounted");
  },
};
</script>
<style></style>
