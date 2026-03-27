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
      searchName: ""
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
      return state.users.filter((user) => user.name.toLowerCase().includes(state.searchName.toLowerCase()));
    }
  },
  mutations: {
    setSearchName(state, payload) {
      state.searchName = payload;
    }
  },
  actions: {
    searchUsersByName(context, payload) {
      setTimeout(() => {
        context.commit("setSearchName", payload);
      }, 1000);
    }
  }
});

const app = createApp(App);

app.component("app-modal", AppModal);
app.use(store);

app.mount("#app");
