import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

import AppModal from "./components/AppModal.vue";

const store = createStore({
  state() {
    return {
      users: [
        {
          id: 1,
          name: "Nguyễn Phong Hào",
          avatar: "hinh",
          age: 23,
          description: "thân thiện , hoc hỏi nhanh",
          programmingLanguage: ["JS", "JAVA"],
          gender: "Nam",
          type: "ADMIN",
        },
        {
          id: 2,
          name: "Phan Thùy Duyên",
          avatar: "hinh",
          age: 22,
          description: "thân thiện , hoc hỏi nhanh",
          programmingLanguage: ["PHP", "C#"],
          gender: "Nữ",
          type: "CLIENT",
        },
      ],
      searchName: "",
    };
  },
  getters: {
    maleUsers(state) {
      return state.users.filter((user) => user.gender === "Nam");
    },
    usersByGender: (state) => (gender) => {
      return state.users.filter((user) => user.gender === gender);
    },
    usersBySearchName: (state) => {
      return state.users.filter((user) =>
        user.name.toLowerCase().includes(state.searchName.toLowerCase())
      );
    },
  },
  mutations: {
    setSearchName(state, payload) {
      state.searchName = payload;
    },
    addUser(state, payload) {
      console.log(payload);
      state.users.push(payload);
    },
    removeUser(state, payload) {
      state.users = state.users.filter((user) => user.id !== payload);
    },
  },
  actions: {
    searchUsersByName(context, payload) {
      setTimeout(() => {
        context.commit("setSearchName", payload);
      }, 1000);
    },
    addUser(context, payload) {
      const user = {
        id: Date.now(),
        name: payload.userName,
        // avatar: payload.avatar,
        avatar: "hinh",
        age: payload.age,
        description: payload.description,
        programmingLanguage: payload.programmingLanguages,
      };
      context.commit("addUser", user);
    },
    removeUser(context, payload) {
      context.commit("removeUser", payload);
    },
  },
});

const app = createApp(App);

app.component("app-modal", AppModal);
app.use(store);

app.mount("#app");
