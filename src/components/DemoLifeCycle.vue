<template>
  <h1>Demo life cycle</h1>

  <input ref="myInput" type="text" />

  <p>{{ count }}</p>

  <button class="btn btn-success" @click="handleIncrement">Increment</button>

  <ChildLifeCycle v-if="count % 2 === 0" />
</template>
<script>
import {
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  ref,
  useTemplateRef,
} from "vue";
import ChildLifeCycle from "./ChildLifeCycle.vue";

export default {
  components: {
    ChildLifeCycle,
  },
  setup() {
    const count = ref(0);
    const input = useTemplateRef("my-input");

    const handleIncrement = () => {
      ++count.value;
    };

    console.log("beforeCreate", count.value);
    console.log("created", count.value);
    handleIncrement();

    onBeforeMount(() => {
      console.log("beforeMount", input.value);
      input.value.focus();
    });

    onBeforeUpdate(() => {
      console.log("Loading = true");
    });
    onUpdated(() => {
      console.log("Loading = false");
    });

    return {
      count,
      handleIncrement,
    };
  },
};
</script>
<style scoped></style>
