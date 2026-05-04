<template>
  <tr>
    <td>
      <img :src="user.avatar" class="mr-2 img-thumbnail" alt="image" />
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
      <button
        type="button"
        class="btn btn-gradient-info btn-icon-text"
        @click="handleOpenModalEditUser"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>

  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalEditUser"
      :handelCloseModal="handleCloseModalEditUser"
    >
      <form-user :userProp="user" @close="handleCloseModalEditUser"></form-user>
    </app-modal>
  </teleport>
</template>

<script>
import { ref, toRefs } from "vue";
import { useStore } from "vuex";
import FormUser from "./FormUser.vue";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: {
    FormUser,
  },
  setup(props) {
    const { user } = toRefs(props);
    const store = useStore();
    const isOpenModalEditUser = ref(false);

    const removeUser = (id) => store.dispatch("user/removeUser", id);

    const handleOpenModalEditUser = () => {
      isOpenModalEditUser.value = true;
    };
    const handleCloseModalEditUser = () => {
      isOpenModalEditUser.value = false;
    };
    const handleRemoveUser = () => {
      if (!confirm("Do you want to remove this user?")) {
        return;
      }

      removeUser(user.value.id);
    };

    return {
      isOpenModalEditUser,
      handleOpenModalEditUser,
      handleCloseModalEditUser,
      handleRemoveUser,
    };
  },
};
</script>

<style></style>
