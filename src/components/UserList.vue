<template>
  <tbody>
    <user-item v-for="user in usersBySearchName" :key="user.id" :user="user"></user-item>
  </tbody>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import UserItem from "./UserItem.vue";

const { mapState, mapGetters } = createNamespacedHelpers('user');

export default {
  components: {
    UserItem,
  },
  computed: {
    loading() {
      return false;
    },
    // maleUsers() {
    //   // return this.$store.getters.maleUsers;
    //   return this.$store.getters.usersByGender("Nam");
    // },
    ...mapState({
      users: state => state.users,
    }),
    ...mapGetters({
      maleUsers: 'maleUsers',
      usersBySearchName: 'usersBySearchName',
    })
  },
};
</script>

<style></style>
