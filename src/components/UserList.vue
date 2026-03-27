<template>
  <tbody>
    <user-item v-for="user in usersBySearchName" :key="user.id" :user="user"></user-item>
  </tbody>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex/dist/vuex.cjs.js';

import UserItem from "./UserItem.vue";

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
