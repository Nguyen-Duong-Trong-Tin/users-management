<template>
  <div class="form-group">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="searchName"
        @keydown.enter="handleSearchName"
      />
      <div class="input-group-append">
        <button
          class="btn btn-sm btn-gradient-primary"
          type="button"
          @click="searchUsersByName(searchName)"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const searchName = ref("");

    const searchUsersByName = (name) => {
      store.dispatch("user/searchUsersByName", name);
    };

    const handleSearchName = () => {
      searchUsersByName(searchName.value);
    };

    watch(searchName, (newValue) => {
      if (newValue === "") {
        searchUsersByName(newValue);
      }
    });

    return {
      searchName,
      searchUsersByName,
      handleSearchName,
    };
  },
};
</script>

<style></style>
