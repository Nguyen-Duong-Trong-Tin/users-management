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
        <button class="btn btn-sm btn-gradient-primary" type="button" @click="searchUsersByName(searchName)">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('user');

export default {
  name: "SearchBar",
  data() {
    return {
      searchName: ""
    }
  },
  watch: {
    searchName(newValue) {
      if (newValue === "") {
        this.searchUsersByName(newValue);
      }
    }
  },
  methods: {
    ...mapActions({
      searchUsersByName: "searchUsersByName",
    })
  },
};
</script>

<style></style>
