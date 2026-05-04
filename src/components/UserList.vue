<template>
  <tbody>
    <user-item
      v-for="user in usersBySearchName"
      :key="user.id"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  setup() {
    const store = useStore();

    const loading = computed(() => false);

    const users = computed(() => store.state.user.users);
    const maleUsers = computed(() => store.getters["user/maleUsers"]);
    const usersBySearchName = computed(
      () => store.getters["user/usersBySearchName"]
    );

    return {
      loading,
      users,
      maleUsers,
      usersBySearchName,
    };
  },
};
</script>

<style></style>
