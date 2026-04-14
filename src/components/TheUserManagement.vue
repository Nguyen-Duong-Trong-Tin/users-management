<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Dev Management</h4>
          <div class="card-bar-controll">
            <search-bar></search-bar>
            <div>
              <button
                type="button"
                class="mr-2 btn btn-gradient-primary btn-icon-text"
                @click="handleOpenModalCartList"
              >
                <i class="mdi mdi-account-plus btn-icon-prepend"></i> ADD
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Age</th>
                  <th>Programming Language</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <user-list></user-list>
            </table>
          </div>
        </div>
      </div>
    </div>
    <teleport to="#app">
      <app-modal
        :isOpen="isOpenModalCartList"
        :handelCloseModal="handleCloseModalCartList"
      >
        <form-user @close="handleCloseModalCartList"></form-user>
      </app-modal>
    </teleport>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import FormUser from "./FormUser.vue";
import SearchBar from "./SearchBar.vue";
import UserList from "./UserList.vue";

const { mapActions } = createNamespacedHelpers("user");

export default {
  components: {
    FormUser,
    SearchBar,
    UserList,
  },
  data() {
    return {
      isOpenModalCartList: false, // đóng modal
    };
  },
  methods: {
    handleOpenModalCartList() {
      this.isOpenModalCartList = true; // mở modal
    },
    handleCloseModalCartList() {
      console.log("OKOK");
      this.isOpenModalCartList = false; // đóng modal
    },
    ...mapActions({
      getUsers: "getUsers",
    }),
  },
  created() {
    this.getUsers();
  },
};
</script>

<style>
.card-bar-controll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
