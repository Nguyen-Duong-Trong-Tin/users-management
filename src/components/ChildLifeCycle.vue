<template>
  <h1>Child life cycle</h1>
</template>
<script>
import { onBeforeUnmount, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    let hello;

    onMounted(() => {
      hello = setInterval(() => {
        console.log("ChildLifeCycle is running");
      }, 1000);
    });

    onBeforeUnmount(() => {
      clearInterval(hello);
      console.log("ChildLifeCycle is unmounted");
    });

    onUnmounted(() => {
      console.log("ChildLifeCycle is unmounted");
    });
  },
};
</script>
<style></style>
