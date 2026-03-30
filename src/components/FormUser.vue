<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Username" v-model="user.userName" />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age" placeholder="Age" v-model="user.age" />
        </div>
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input type="text" class="form-control" id="avatar" placeholder="avatar" v-model="user.avatar" />
        </div>
        <div class="form-group">
          <label for="">Programming Language : </label>
          <div class="form-row-flex">
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="Javascript"
                  v-model="user.programmingLanguages" />
                JavaScript
                <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="Java" v-model="user.programmingLanguages" />
                Java <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="PHP" v-model="user.programmingLanguages" />
                PHP <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="Python" v-model="user.programmingLanguages" />
                Python
                <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="C#" v-model="user.programmingLanguages" />
                C# <i class="input-helper"></i></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="C/C++" v-model="user.programmingLanguages" />
                C/C++
                <i class="input-helper"></i></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="gender" id="gender" value="Nam"
                  v-model="user.gender" />
                Nam <i class="input-helper"></i></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="gender" id="gender" value="Nữ"
                  v-model="user.gender" />
                Nữ <i class="input-helper"></i></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="gender" id="gender" value="Khác"
                  v-model="user.gender" />
                Khác <i class="input-helper"></i></label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Type User : </label>
          <div class="col-sm-9">
            <select class="form-control" v-model="user.typeUser">
              <option>Admin</option>
              <option>Client</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" id="description" rows="4" v-model="user.description"></textarea>
        </div>
        <button type="submit" class="btn btn-gradient-primary mr-2">
          Submit
        </button>
        <button class="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FormUser",
  props: {
    userProp: {
      type: Object,
      default: undefined,
    }
  },
  data() {
    return {
      user: {
        userName: "",
        age: 0,
        avatar: "",
        programmingLanguages: [],
        gender: "Nam",
        typeUser: "Client",
        description: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (!this.userProp) {
        this.addUser(this.user);
        return;
      }

      this.updateUser({ ...this.user });
    },
    ...mapActions({
      addUser: "addUser",
      updateUser: "updateUser",
    }),
  },
  created() {
    if (this.userProp) {
      this.user = { ...this.userProp, userName: this.userProp.name, programmingLanguages: this.userProp.programmingLanguage, typeUser: this.userProp.type };
    }
  }
};
</script>

<style>
.form-row-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
