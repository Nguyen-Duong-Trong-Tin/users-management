import { createUser, getUsers, removeUser, updateUser } from "../../apis/user";

const state = () => {
  return {
    users: [],
    searchName: "",
  };
};

const getters = {
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
};

const mutations = {
  setUsers(state, payload) {
    state.users = payload;
  },
  setSearchName(state, payload) {
    state.searchName = payload;
  },
  updateUser(state, payload) {
    const index = state.users.findIndex((user) => user.id === payload.id);
    if (index !== -1) {
      state.users[index] = { ...state.users[index], ...payload };
    }
  },
};

const actions = {
  async getUsers(context) {
    const users = await getUsers();
    context.commit("setUsers", users);
  },
  searchUsersByName(context, payload) {
    setTimeout(() => {
      context.commit("setSearchName", payload);
    }, 1000);
  },
  async addUser(context, payload) {
    const user = {
      id: Date.now(),
      name: payload.userName,
      // avatar: payload.avatar,
      avatar: "hinh",
      age: payload.age,
      description: payload.description,
      programmingLanguage: payload.programmingLanguages,
    };

    await createUser(user);
    context.dispatch("getUsers");
  },
  async removeUser(context, payload) {
    await removeUser(payload);

    context.dispatch("getUsers");
  },
  async updateUser(context, payload) {
    const user = {
      id: payload.id,
      name: payload.userName,
      avatar: payload.avatar ? payload.avatar : "hinh",
      age: payload.age,
      description: payload.description,
      programmingLanguage: payload.programmingLanguages,
    };

    await updateUser(user);
    context.dispatch("getUsers");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
