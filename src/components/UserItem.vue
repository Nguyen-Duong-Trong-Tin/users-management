<template>
  <tr>
    <td>
      <img src="assets/images/faces/face1.jpg" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>{{ user.age }}</td>
    <td>
      <label
        class="badge badge-gradient-primary mr-2"
        v-for="(item, index) in user.programmingLanguage"
        :key="index"
        >{{ item }}</label
      >
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="handleRemoveUser"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button type="button" class="btn btn-gradient-info btn-icon-text">
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserItem",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleRemoveUser() {
      if (!confirm("Do you want to remove this user?")) {
        return;
      }

      this.removeUser(this.user.id);
    },
    ...mapActions({
      removeUser: "removeUser",
    }),
  },
};
</script>

<style></style>
